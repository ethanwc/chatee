import React from 'react';
import {View} from 'react-native';
import ConversationsView from '../../containers/Conversation/ConversationsView';
import MessageBar from '../../containers/Conversation/MessageBar';

const Conversation = () => {
  return (
    <View style={{flex: 1}}>
      <ConversationsView />
      <MessageBar />
    </View>
  );
};

export default Conversation;
