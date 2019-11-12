import React from 'react';
import {View, Text, Image, TouchableNativeFeedback, Alert} from 'react-native';
import {Conversation} from '../../styles';

/**
 * UI for a chat
 * @param props
 */
const ChatView = (props: any) => {
  const chat = props.chat;
  const date = chat.lastMessageDate || chat.createdDate;

  return (
    <View style={Conversation.Conversation.Wrapper}>
      <TouchableNativeFeedback
        onPress={() =>
          props.navigation.navigate('Conversation', {chatid: props.chat._id})
        }>
        <View style={Conversation.Conversation.Content}>
          <Image
            style={Conversation.Conversation.ContactImage}
            source={require('../../assets/logo.png')}
          />
          <View style={Conversation.Conversation.MessageWrapper}>
            <View style={{flexDirection: 'row'}}>
              <Text style={Conversation.Conversation.HeaderText}>
                {chat.creator}
              </Text>
              <Text style={Conversation.Conversation.TimeText}>{date}</Text>
            </View>
            <Text style={{flexWrap: 'wrap'}}>{chat.lastMessage}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ChatView;
