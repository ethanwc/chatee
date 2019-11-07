import React from 'react';
import {View, Text} from 'react-native';
import {Chat} from '../../styles';

const ConversationView = (props: any) => {
  const name = 'Steve Jobs';
  const message = 'I really think Microsoft is a better place to work.';
  const time = new Date().toTimeString();
  return (
    <View style={Chat.Conversation.Content}>
      <Text style={Chat.Conversation.HeaderText}>{name}</Text>
      <Text style={Chat.Conversation.TimeText}>{time}</Text>

      <Text style={Chat.Conversation.BodyText}>{message}</Text>
    </View>
  );
};

export default ConversationView;
