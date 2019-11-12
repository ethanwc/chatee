import React, {useState, useEffect} from 'react';
import {View, Alert, AsyncStorage, Text} from 'react-native';
import ConversationsView from '../../containers/Conversation/ConversationsView';
import MessageBar from '../../containers/Conversation/MessageBar';
import ContentBar from '../../containers/Conversation/ContentBar';
import BackBar from '../../containers/Control/BackBar';
import Endpoints from '../../assets/endpoints.json';
import Axios from 'axios';

/**
 * Controller for a conversation
 */
const Conversation = (props: any) => {
  //uri to load messages
  const getConversation_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.chats}`;
  //uri to send messages
  const sendmessage_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.messages}`;
  //hook for chat messages
  const [conversation, setConversation] = useState();
  //hook for swapping between text input and content input
  const [showContent, setShowContent] = useState(false);
  //id of current chat
  const chatid = props.navigation.getParam('chatid');

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
      //why is this so complicated...........
      let tempFullMessages = conversation.fullMessages;
      tempFullMessages.push(data);
      let tempConversation = conversation;
      tempConversation.fullMessages = tempFullMessages;
      setConversation(tempConversation);
    }
  };

  useEffect(() => {
    getConversation();
  }, []);

  if (!conversation) return <Text>Loading</Text>;

  return (
    <View style={{flex: 1}}>
      <BackBar navigation={props.navigation} search={true} />
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
