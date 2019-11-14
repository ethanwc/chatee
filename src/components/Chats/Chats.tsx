import React, {useState, useEffect} from 'react';
import ChatsView from '../../containers/Chats/ChatsView';
import ControlBar from '../../containers/Control/ControlBar';
import {View, Alert, AsyncStorage, Text} from 'react-native';
import {FAB} from 'react-native-paper';
import {Control} from '../../styles';
import Endpoints from '../../assets/endpoints.json';
import Axios from 'axios';

/**
 * Controller for chats
 */
const Chats = (props: any) => {
  //uri to create a chat
  const createchat_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.chats}`;

  /**
   * Create a new chat
   */
  const createNewChat = async () => {
    let res = await Axios.post(
      createchat_uri,
      {},
      {
        headers: {'x-access-token': await AsyncStorage.getItem('JWT')},
      },
    );

    if (res) props.getChats();
  };

  if (!props.chats)
    return <Text> Loadingasdfchats1234abcdwtfamidoingrightnow</Text>;

  const fab = (
    <FAB style={Control.Fab.fab} icon="plus" onPress={() => createNewChat()} />
  );

  return (
    <View style={{flex: 1}}>
      <ControlBar
        navigation={props.navigation}
        toggleMenu={props.toggleMenu}
        showMenu={props.showMenu}
        isMain={false}
      />
      <ChatsView
        user={props.user}
        users={props.users}
        getUsers={props.getUsers}
        navigation={props.navigation}
        chats={props.chats}
        getChats={props.getChats}
      />
      {fab}
    </View>
  );
};

export default Chats;
