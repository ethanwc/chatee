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

  const imglocation =
    props.picture && props.picture === 'unset'
      ? require('../../assets/logo.png')
      : {uri: props.picture};

  let leave = canLeave ? (
    <Icon
      onPress={() =>
        props.leaveChat({removeuser: props.user.email, chatid: props.id})
      }
      name="remove"
      size={30}
      color={Control.Bar.Icon.color}
    />
  ) : null;

  let lastMessage = chat.lastMessage && chat.lastMessage.includes('cloudinary')
    ? 'Image'
    : chat.lastMessage;

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
            source={imglocation}
          />
          <View style={Conversation.Conversation.MessageWrapper}>
            <View style={{flexDirection: 'row'}}>
              <Text style={Conversation.Conversation.HeaderText}>
                {chat.creator}
              </Text>
              <Text style={Conversation.Conversation.TimeText}>{date}</Text>
              {leave}
            </View>
            <Text style={{flexWrap: 'wrap'}}>{lastMessage}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ChatView;
