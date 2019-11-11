import React, {useState, useEffect} from 'react';
import ChatsView from '../../containers/Chats/ChatsView';
import ControlBar from '../../containers/Control/ControlBar';
import {View, Alert, AsyncStorage} from 'react-native';
import {FAB} from 'react-native-paper';
import {Control} from '../../styles';
import Endpoints from '../../assets/endpoints.json';
import Axios from 'axios';

/**
 * Controller for chats
 */
const Chats = (props: any) => {
  //endpoint to create a chat
  const endpoint_addfriend = `${Endpoints.base}/${Endpoints.version}/${Endpoints.chats}`;
  //hooks for chats
  const [chats, setChats] = useState(Array<any>());

  useEffect(() => {
    let initialLoad = async () => {
      
    };

    initialLoad();
  }, []);

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
