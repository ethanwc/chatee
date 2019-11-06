import React from 'react';
import {View} from 'react-native';
import ConversationView from '../../containers/Conversation/ConversationView';
import MessageBar from '../../containers/Conversation/MessageBar';

const Conversation = () => {
  return (
    <View style={{flex: 1}}>
      <ConversationView />
      <MessageBar />
    </View>
  );
};

export default Conversation;
