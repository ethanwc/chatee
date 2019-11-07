import React from 'react';
import {View, Text, Image} from 'react-native';
import {Chat} from '../../styles';

const ConversationView = (props: any) => {
  const name = 'Steve Jobs';
  const message = 'What do you mean?';
  const time = new Date().toTimeString();
  return (
    <View style={Chat.Conversation.Wrapper}>
      <View style={Chat.Conversation.Content}>
        <Image
          style={Chat.Conversation.ContactImage}
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          }}
        />
        <View style={Chat.Conversation.MessageWrapper}>
          <View style={{flexDirection: 'row'}}>
            <Text style={Chat.Conversation.HeaderText}>{name}</Text>
            <Text style={Chat.Conversation.TimeText}>{time}</Text>
          </View>
          <Text style={{flexWrap: 'wrap'}}>{message}</Text>
        </View>
      </View>
    </View>
  );
};

export default ConversationView;
