import React from 'react';
import {View} from 'react-native';
import ConversationsView from '../../containers/Conversation/ConversationsView';
import MessageBar from '../../containers/Conversation/MessageBar';
import ControlBar from '../../containers/Conversation/ControlBar';

/**
 * Controller for a conversation
 */
const Conversation = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <ControlBar navigation={props.navigation} />
      <ConversationsView />
      <MessageBar />
    </View>
  );
};

export default Conversation;
