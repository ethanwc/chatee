import React from 'react';
import {View, Text, Image} from 'react-native';
import {Conversation} from '../../styles';

const ConversationView = (props: any) => {
  const name = 'Steve Jobs';
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
            <Text style={Conversation.Conversation.HeaderText}>
              {props.message.author}
            </Text>
            <Text style={Conversation.Conversation.TimeText}>
              {props.message.editDate}
            </Text>
          </View>
          <Text style={{flexWrap: 'wrap'}}>{props.message.message}</Text>
        </View>
      </View>
    </View>
  );
};

export default ConversationView;
