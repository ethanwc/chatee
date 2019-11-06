import React from 'react';
import {View, Text, Image} from 'react-native';
import {Chat} from '../../styles';
const ChatView = (props: any) => {
  return (
    <View style={Chat.ChatPreview.Wrapper}>
      <Text style={Chat.ChatPreview.HeaderText}>{props.test}</Text>
      <Text style={Chat.ChatPreview.BodyText}>{props.test}</Text>
    </View>
  );
};

export default ChatView;
