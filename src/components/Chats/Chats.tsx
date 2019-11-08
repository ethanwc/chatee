import React from 'react';
import ChatsView from '../../containers/Chats/ChatsView';
import ControlBar from '../../containers/Control/ControlBar';
import {View} from 'react-native';

/**
 * Controller for chats
 */
const Chats = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <ControlBar
        navigation={props.navigation}
        toggleMenu={props.toggleMenu}
        showMenu={props.showMenu}
        isMain={false}
      />
      <ChatsView navigation={props.navigation} />
    </View>
  );
};

export default Chats;
