import React, {useState, useEffect} from 'react';
import {View, Alert, AsyncStorage, Text} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ConversationsView from '../../containers/Conversation/ConversationsView';
import MessageBar from '../../containers/Conversation/MessageBar';
import ContentBar from '../../containers/Conversation/ContentBar';
import ControlBar from '../../containers/Control/ControlBar';
import Endpoints from '../../assets/endpoints.json';
import SearchModal from '../Modal/SearchModal';
import {Control} from '../../styles';
import Axios from 'axios';
import {ActivityIndicator} from 'react-native-paper';
import RNLocation from 'react-native-location';

/**
 * Controller for a conversation
 */
const Conversation = (props: any) => {
  //uri for cloudinary
  const cloudinary_url = `${Endpoints.cloudinary}`;
  //uri for geocoding
  const locationiq_uri = `${Endpoints.locationiq}${Endpoints.locationiqkey}`;
  //endpoint to get all users
  const endpoint_getusers = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}/${Endpoints.all}`;
  //uri to load messages
  const getConversation_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.chats}`;
  //uri to send messages
  const sendmessage_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.messages}`;
  //uri to invite member to conversation
  const inviteconversation_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.chats}/${Endpoints.invite}`;
  //uri to remove member from conversation
  const removeconversation_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.chats}/${Endpoints.remove}`;
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
  const getChats = props.navigation.getParam('getChats');
  //user info, helps with managing chat members
  const user = props.navigation.getParam('user');
  //all users basic info
  //hook for searching conversation
  const [search, setSearch] = useState('');

  /**
   * Get conversation on start, filter users...
   */
  useEffect(() => {
    getConversation();
    updateUsers();
  }, []);

  /**
   * Filter what members / friends to show
   */
  const filter = (users: any) => {
    let tempMembers: any[] = [];

    /**
     * List members of chat as actual members and potential friend based members.
     */
    if (conversation) {
      for (let member of users) {
        //only show releveant people... friends, members, requested members, yourself?
        if (
          member.email === user.email ||
          user.friends.includes(member.email) ||
          member.chats.includes(chatid) ||
          member.chatRequests.includes(chatid)
        ) {
          let type = 'unset';
          //if you are the creator you can add/remove other people
          if (conversation.creator === user.email) {
            //creator cant remove themself
            if (member.email !== user.email) {
              if (member.chatRequests.includes(chatid)) type = 'pending';
              if (member.chats.includes(chatid) || user.email === member.email)
                type = 'set';
            } else type = 'unauth';
            //not the chat creator
          } else {
            if (member.chatRequests.includes(chatid)) type = 'pending';
            if (member.chats.includes(chatid)) type = 'unauth';
          }
          let tempUser = {
            email: member.email,
            name: member.name,
            key: member.email,
            type: type,
            picture: member.profile.picture,
          };
          tempMembers.push(tempUser);
        }
      }

      setFilteredMembers([...tempMembers]);
    }
  };
  /**
   * Load messages for the conversation
   */
  const getConversation = async () => {
    let res = await Axios.get(`${getConversation_uri}/${chatid}`, {
      headers: {'x-access-token': await AsyncStorage.getItem('JWT')},
    });

    let data = res.data;

    if (data) {
      setConversation({
        messages: data.fullMessages.reverse(),
        creator: data.creator,
      });
    }
  };

  /**
   * Send a message to the conversation
   */
  const sendMessage = async (info: any) => {
    let res = await Axios.post(`${sendmessage_uri}`, info, {
      headers: {'x-access-token': await AsyncStorage.getItem('JWT')},
    });

    let data = res.data;

    if (data) updateAll();
  };

  /**
   * Selects an image for the chat
   */
  const selectImage = async (chatid: string) => {
    const options = {
      title: 'Select an Image to share',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    // Open Image Library:
    ImagePicker.launchImageLibrary(options, response => {
      if (response.error) Alert.alert('error', response.error);
      else uploadImage(response, chatid);
    });
  };

  /**
   * Take an image for the chat
   */
  const takePhoto = async (chatid: string) => {
    const options = {
      title: 'Share a photo! Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    // Launch Camera:
    ImagePicker.launchCamera(options, response => {
      if (response.error) Alert.alert('error', response.error);
      else uploadImage(response, chatid);
    });
  };

  /**
   * Upload image to cloudinary
   */
  const uploadImage = async (image: any, chatid: string) => {
    var body = new FormData();
    let base64Img = `data:image/jpg;base64,${image.data}`;
    body.append('file', base64Img);
    body.append('upload_preset', 'ajp1noec');

    Axios.post(cloudinary_url, body)
      .then((res: any) => {
        const info = {
          message: {type: 'image', message: res.data.url},
          chatid: chatid,
        };
        sendMessage(info);
      })
      .catch((error: any) => {});
  };

  /**
   * Get your location for the chat
   */
  const getLocation = async () => {
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    });

    RNLocation.getLatestLocation({timeout: 6000}).then(latestLocation => {
      if (latestLocation) getAddress(latestLocation);
    });
  };

  /**
   * Converts location to address
   */
  const getAddress = async (location: any) => {
    Axios.get(
      `${locationiq_uri}&lat=${location.latitude}&lon=${location.longitude}&format=json`,
    )
      .then((res: any) => {
        let address = res.data.display_name;

        const info = {
          message: {
            type: 'text',
            message: `${user.name} is currently at ${address}`,
          },
          chatid: chatid,
        };
        sendMessage(info);
      })
      .catch((error: any) => {
        Alert.alert('Error', error.message);
      });
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
  const removeMember = async (info: any) => {
    let res = await Axios.post(removeconversation_uri, info, {
      headers: {'x-access-token': await AsyncStorage.getItem('JWT')},
    });

    let data = res.data;

    if (data) updateUsers();
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
    }
  };

  /**
   * Update all releveant information
   */
  const updateAll = () => {
    getConversation();
    getChats();
  };

  //wait til loaded to render
  if (!conversation || !conversation.creator)
    return <ActivityIndicator size="large" color={Control.Bar.Icon.color} />;
  //make sure users are filtered based on chat
  if (!filteredMembers){
    updateUsers();
    return <Text>Loading</Text>;
  } 

  return (
    <View style={{flex: 1}}>
      <SearchModal
        navigation={props.navigation}
        type={'chats'}
        users={filteredMembers}
        showModal={showModal}
        setShowModal={setShowModal}
        conversation={conversation.messages}
        friendRequest={inviteMember}
        friendRemove={removeMember}
        chatid={chatid}
      />
      <ControlBar
        navigation={props.navigation}
        settings={true}
        toggleSettings={setShowModal}
        search={search}
        setSearch={setSearch}
        goesBack={true}
      />
      <ConversationsView messages={conversation.messages} search={search} />
      <ContentBar
        showContent={showContent}
        setShowContent={setShowContent}
        selectImage={selectImage}
        takePhoto={takePhoto}
        getLocation={getLocation}
        chatid={chatid}
      />
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
