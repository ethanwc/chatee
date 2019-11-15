import React from 'react';
import {View, Text, Image, TouchableNativeFeedback, Alert} from 'react-native';
import {Conversation} from '../../styles';
import {Icon} from 'react-native-elements';
import {Control, Chats} from '../../styles';

/**
 * UI for a chat request
 * @param props
 */
const ChatRequestView = (props: any) => {
  const chat = props.chat;
  const date = chat.lastMessageDate || chat.createdDate;


  let accept = (
    <Icon
      onPress={() => props.handleChatInvite({accept: true, chatid: props.id})}
      name="check"
      size={40}
      color={Control.Bar.Icon.color}
    />
  );

  let decline = (
    <Icon
      onPress={() => props.handleChatInvite({accept: false, chatid: props.id})}
      name="clear"
      size={40}
      color={Control.Bar.Icon.color}
    />
  );

  return (
    <View style={Conversation.Conversation.Wrapper}>
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
            <View>
              {accept}
              {decline}
            </View>
          </View>

          <Text style={{flexWrap: 'wrap'}}>{chat.lastMessage}</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatRequestView;
