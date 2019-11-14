import React from 'react';
import {View, Text, Image, TouchableNativeFeedback, Alert} from 'react-native';
import {Conversation, Control} from '../../styles';
import {Icon} from 'react-native-elements';

/**
 * UI for a chat
 * @param props
 */
const ChatView = (props: any) => {
  const chat = props.chat;
  const date = chat.lastMessageDate || chat.createdDate;

  //only show option to leave if user is not the chat creator
  const canLeave = props.chat.creator !== props.user.email;

  let leave = canLeave ? (
    <Icon
      onPress={() =>
        props.leaveChat({removeuser: props.user.email, chatid: props.id})
      }
      name="remove"
      size={40}
      color={Control.Bar.Icon.color}
    />
  ) : null;

  return (
    <View style={Conversation.Conversation.Wrapper}>
      <TouchableNativeFeedback
        onPress={() =>
          props.navigation.navigate('Conversation', {
            chatid: props.chat._id,
            getChats: () => props.getChats(),
            getUsers: () => props.getUsers(),
            user: props.user,
            users: props.users,
          })
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
              {leave}
            </View>
            <Text style={{flexWrap: 'wrap'}}>{chat.lastMessage}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ChatView;
