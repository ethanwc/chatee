import React from 'react';
import {View, Text, Image} from 'react-native';
import {Conversation} from '../../styles';

const ConversationView = (props: any) => {
  const name = 'Steve Jobs';
  const message = 'What do you mean?';
  const time = new Date().toTimeString();
  return (
    <View style={Conversation.Conversation.Wrapper}>
      <View style={Conversation.Conversation.Content}>
        <Image
          style={Conversation.Conversation.ContactImage}
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          }}
        />
        <View style={Conversation.Conversation.MessageWrapper}>
          <View style={{flexDirection: 'row'}}>
            <Text style={Conversation.Conversation.HeaderText}>{name}</Text>
            <Text style={Conversation.Conversation.TimeText}>{time}</Text>
          </View>
          <Text style={{flexWrap: 'wrap'}}>{message}</Text>
        </View>
      </View>
    </View>
  );
};

export default ConversationView;
