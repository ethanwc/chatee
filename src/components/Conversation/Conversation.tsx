import React, {useState} from 'react';
import {View} from 'react-native';
import ConversationsView from '../../containers/Conversation/ConversationsView';
import MessageBar from '../../containers/Conversation/MessageBar';
import ContentBar from '../../containers/Conversation/ContentBar';
import BackBar from '../../containers/Control/BackBar';

/**
 * Controller for a conversation
 */
const Conversation = (props: any) => {
  //hook for swapping between text input and content input
  const [showContent, setShowContent] = useState(false);

  return (
    <View style={{flex: 1}}>
      <BackBar navigation={props.navigation} search={true} />
      <ConversationsView />
      <ContentBar showContent={showContent} setShowContent={setShowContent} />
      <MessageBar showContent={showContent} setShowContent={setShowContent} />
    </View>
  );
};

export default Conversation;
