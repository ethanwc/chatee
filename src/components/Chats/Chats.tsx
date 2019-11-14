import React from 'react';
import ChatsView from '../../containers/Chats/ChatsView';
import ControlBar from '../../containers/Control/ControlBar';
import {View, AsyncStorage} from 'react-native';
import {FAB, ActivityIndicator} from 'react-native-paper';
import {Control} from '../../styles';
import Endpoints from '../../assets/endpoints.json';
import Axios from 'axios';

/**
 * Controller for chats
 */
const Chats = (props: any) => {
  //uri to create a chat
  const createchat_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.chats}`;
  //uri to respond to chat invite
  const handlechat_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.chats}/${Endpoints.handleInvite}`;
  //uri to leave a chat
  const leavechat_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.chats}/${Endpoints.remove}`;

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

  /**
   * Handle a chat invite
   */
  const handleChatInvite = async (info: any) => {
    let res = await Axios.post(handlechat_uri, info, {
      headers: {'x-access-token': await AsyncStorage.getItem('JWT')},
    });

    if (res) props.getChats();
  };

  /**
   * Leave a chat
   */
  const leaveChat = async (info: any) => {
    let res = await Axios.post(leavechat_uri, info, {
      headers: {'x-access-token': await AsyncStorage.getItem('JWT')},
    });

    if (res) props.getChats();
  };

  if (!props.chats)
    return <ActivityIndicator size="large" color={Control.Bar.Icon.color} />;

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
        handleChatInvite={handleChatInvite}
        leaveChat={leaveChat}
      />
      {fab}
    </View>
  );
};

export default Chats;
