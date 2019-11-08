import React from 'react';
import {View} from 'react-native';
import ConversationsView from '../../containers/Conversation/ConversationsView';
import MessageBar from '../../containers/Conversation/MessageBar';
import BackBar from '../../containers/Control/BackBar';

/**
 * Controller for a conversation
 */
const Conversation = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <BackBar navigation={props.navigation} search={true} />
      <ConversationsView />
      <MessageBar />
    </View>
  );
};

export default Conversation;
