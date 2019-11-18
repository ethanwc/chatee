import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {Control} from '../../styles';

/**
 * UI for message bar in the conversation view
 */
const MessageBar = (props: any) => {
  const [message, setMessage] = useState('');

  /**
   * Handles message sending
   */

  const handleSendMessage = () => {
    if (message.length > 0) {
      props.sendMessage({
        message: {type: 'text', message: message},
        chatid: props.chatid,
      });
      setMessage('');
    }
  };

  let chat = !props.showContent ? (
    <View style={Control.Bar.Wrapper}>
      <View style={{flex: 1}}>
        <View style={Control.Bar.IconWrapper}>
          <Icon
            name="add"
            size={40}
            color={Control.Bar.Icon.color}
            onPress={() => props.setShowContent(!props.showContent)}
          />
        </View>
      </View>

      <View style={{flex: 6}}>
        <TextInput
          placeholder="Enter a message"
          placeholderTextColor={Control.Bar.ChatInput.color}
          style={Control.Bar.Input}
          value={message}
          onChangeText={text => setMessage(text)}
        />
      </View>
      <View style={{flex: 1}}>
        <Icon
          name="send"
          size={45}
          color={Control.Bar.Icon.color}
          onPress={() => handleSendMessage()}
        />
      </View>
    </View>
  ) : null;

  return chat;
};

export default MessageBar;
