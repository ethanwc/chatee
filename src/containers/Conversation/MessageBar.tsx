import React from 'react';
import {View, Button, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

const MessageBar = () => {
  return (
    <View
      style={{
        height: 45,
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <Button title="XTA" onPress={() => Alert.alert('123')} />

      <Icon name="rocket" size={30} color="#900" />
      <TextInput multiline={true} placeholder="Enter a message." />
      <Button title="SND" onPress={() => Alert.alert('123')} />
    </View>
  );
};

export default MessageBar;
