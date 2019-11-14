import React, {useState, useEffect} from 'react';
import {View, Alert, AsyncStorage, Text} from 'react-native';
import ConversationsView from '../../containers/Conversation/ConversationsView';
import MessageBar from '../../containers/Conversation/MessageBar';
import ContentBar from '../../containers/Conversation/ContentBar';
import BackBar from '../../containers/Control/BackBar';
import Endpoints from '../../assets/endpoints.json';
import SearchModal from '../Modal/SearchModal';
import Axios from 'axios';

/**
 * Controller for a conversation
 */
const Conversation = (props: any) => {
  //endpoint to get all users
  const endpoint_getusers = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}/${Endpoints.all}`;
  //uri to load messages
  const getConversation_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.chats}`;
  //uri to send messages
  const sendmessage_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.messages}`;
  //uri to invite member to conversation
  const inviteconversation_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.chats}/${Endpoints.invite}`;
  //hook for chat messages
  const [conversation, setConversation] = useState();
  //hook for swapping between text input and content input
  const [showContent, setShowContent] = useState(false);
  //hook for displaying user invite modal
  const [showModal, setShowModal] = useState(false);
  //hook for filtered users in chat
  const [filteredMembers, setFilteredMembers] = useState();
  //id of current chat
  const chatid = props.navigation.getParam('chatid');
  //callback function to update who is in a chat
  const getUsers = props.navigation.getParam('getUsers');
  //callback function to update chats page
  const getChats = props.navigation.getParam('getChats');
  //user info, helps with managing chat members
  const user = props.navigation.getParam('user');
  //all users basic info
  const [users, setUsers] = useState(props.navigation.getParam('users'));

  /**
   * Get conversation on start, filter users...
   */

  useEffect(() => {
    getConversation();
    filter(users);
  }, []);

  /**
   * Filter what members / friends to show
   */
  const filter = (users: any) => {
    let tempMembers: any[] = [];

    /**
     * List members of chat as actual members and potential friend based members.
     */
    for (let member of users) {
      let type = 'unset';
      if (member.chatRequests.includes(chatid)) type = 'pending';
      if (member.chats.includes(chatid) || user.email === member.email)
        type = 'set';

      let tempUser = {
        email: member.email,
        name: member.name,
        key: member.email,
        type: type,
      };

      //member if friend of logged user: or pending/added

      if (
        user.friends.includes(tempUser.email) ||
        tempUser.type === 'set' ||
        tempUser.type === 'pending'
      )
        if (!tempMembers.includes(tempUser)) tempMembers.push(tempUser);
    }

    setFilteredMembers([...tempMembers]);
  };
  /**
   * Load messages for the conversation
   */
  const getConversation = async () => {
    let res = await Axios.get(`${getConversation_uri}/${chatid}`, {
      headers: {'x-access-token': await AsyncStorage.getItem('JWT')},
    });

    let data = res.data;

    if (data) setConversation(data);
  };

  /**
   * Send a message to the conversation
   */
  const sendMessage = async (info: any) => {
    let res = await Axios.post(`${sendmessage_uri}`, info, {
      headers: {'x-access-token': await AsyncStorage.getItem('JWT')},
    });

    let data = res.data;

    if (data) {
      getConversation();
      getChats();
    }
  };

  /**
   * Invites a member to a chat
   */
  const inviteMember = async (info: any) => {
    let res = await Axios.post(inviteconversation_uri, info, {
      headers: {'x-access-token': await AsyncStorage.getItem('JWT')},
    });

    let data = res.data;

    if (data) updateUsers();
  };

  /**
   * Removes a member from a chat
   */
  const removeMember = async () => {
    Alert.alert('removed...notrly');
  };

  /**
   * Get all releveant users... again
   */
  const updateUsers = async () => {
    let res = await Axios.get(endpoint_getusers, {
      headers: {
        'x-access-token': await AsyncStorage.getItem('JWT'),
      },
    });

    let data = res.data;
    if (data) {
      filter(data);
      // setUsers(data);
    }
  };

  //wait til loaded to render
  if (!conversation) return <Text>Loading</Text>;

  return (
    <View style={{flex: 1}}>
      <SearchModal
        type={'chats'}
        users={filteredMembers}
        showModal={showModal}
        setShowModal={setShowModal}
        conversation={conversation}
        friendRequest={inviteMember}
        friendRemove={removeMember}
        chatid={chatid}
      />
      <BackBar
        navigation={props.navigation}
        search={true}
        settings={true}
        toggleSettings={setShowModal}
      />
      <ConversationsView messages={conversation.fullMessages} />
      <ContentBar showContent={showContent} setShowContent={setShowContent} />
      <MessageBar
        showContent={showContent}
        setShowContent={setShowContent}
        chatid={chatid}
        sendMessage={sendMessage}
      />
    </View>
  );
};

export default Conversation;
