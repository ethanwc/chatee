import React from 'react';
import Chats from '../Chats/Chats';
import ControlBar from '../../containers/ControlBar/ControlBar';
import {View, Alert} from 'react-native';

const toggleMenu = () => {
  Alert.alert('test');
};

/**
 * Holds various components inside the menu
 */
const Holder = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <ControlBar navigation={props.navigation} toggleMenu={toggleMenu} />
      <Chats />
    </View>
  );
};

export default Holder;
