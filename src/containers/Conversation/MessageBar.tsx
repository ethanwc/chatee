import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const MessageBar = () => {
  return (
    <View style={{flex: 1}}>
      <TextInput
        multiline={true}
        style={{height: 40}}
        placeholder="Enter a message."
      />
    </View>
  );
};

export default MessageBar;
