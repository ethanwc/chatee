import React from 'react';
import {View, Text, Image, TouchableNativeFeedback, Alert} from 'react-native';
import {Conversation} from '../../styles';

/**
 * UI for a chat
 * @param props
 */
const ChatView = (props: any) => {
  const name = 'Steve Jobs';
  const message = 'What do you mean?';
  const time = new Date().toTimeString();
  //todo: pass data into conversation... 
  return (
    <View style={Conversation.Conversation.Wrapper}>
      <TouchableNativeFeedback onPress={() => props.navigation.navigate('Conversation')}>
        <View style={Conversation.Conversation.Content}>
          <Image
            style={Conversation.Conversation.ContactImage}
            source={require('../../assets/logo.png')}
          />
          <View style={Conversation.Conversation.MessageWrapper}>
            <View style={{flexDirection: 'row'}}>
              <Text style={Conversation.Conversation.HeaderText}>{name}</Text>
              <Text style={Conversation.Conversation.TimeText}>{time}</Text>
            </View>
            <Text style={{flexWrap: 'wrap'}}>{message}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ChatView;
