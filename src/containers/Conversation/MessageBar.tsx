import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {Control} from '../../styles';

/**
 * UI for message bar in the conversation view
 */
const MessageBar = () => {
  return (
    <View style={Control.Bar.Wrapper}>
      <View style={{flex: 1}}>
        <View style={Control.Bar.IconWrapper}>
          <Icon name="add" size={40} color={Control.Bar.Icon.color} />
        </View>
      </View>

      <View style={{flex: 6}}>
        <TextInput
          multiline={true}
          placeholder="Enter a message"
          placeholderTextColor={Control.Bar.ChatInput.color}
          style={{flexWrap: 'wrap'}}
        />
      </View>
      <View style={{flex: 1}}>
        <Icon name="send" size={40} color={Control.Bar.Icon.color} />
      </View>
    </View>
  );
};

export default MessageBar;
