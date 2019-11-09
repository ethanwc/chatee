import React from 'react';
import ChatsView from '../../containers/Chats/ChatsView';
import ControlBar from '../../containers/Control/ControlBar';
import {View, Alert} from 'react-native';
import {FAB} from 'react-native-paper';
import {Control} from '../../styles';

/**
 * Controller for chats
 */
const Chats = (props: any) => {
  const fab = (
    <FAB
      style={Control.Fab.fab}
      icon="plus"
      onPress={() => console.log(Alert.alert('pressed'))}
    />
  );

  return (
    <View style={{flex: 1}}>
      <ControlBar
        navigation={props.navigation}
        toggleMenu={props.toggleMenu}
        showMenu={props.showMenu}
        isMain={false}
      />
      <ChatsView navigation={props.navigation} />
      {fab}
    </View>
  );
};

export default Chats;
