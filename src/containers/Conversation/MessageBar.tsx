import React from 'react';
import {View, Button, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {Chat} from '../../styles';

const MessageBar = () => {
  return (
    <View style={Chat.Bar.Wrapper}>
      <View style={{flex: 1}}>
        <View style={Chat.Bar.IconWrapper}>
          <Icon name="add" size={40} color={Chat.Bar.Icon.color} />
        </View>
      </View>

      <View style={{flex: 6}}>
        <TextInput
          multiline={true}
          placeholder="Enter a message"
          placeholderTextColor={Chat.Bar.ChatInput.color}
          style={{flexWrap: 'wrap'}}
        />
      </View>
      <View style={{flex: 1}}>
        <Icon name="send" size={40} color={Chat.Bar.Icon.color} />
      </View>
    </View>
  );
};

export default MessageBar;
