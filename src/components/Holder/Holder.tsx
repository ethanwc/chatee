import React, {useState, useEffect} from 'react';
import Chats from '../Chats/Chats';
import ControlBar from '../../containers/Control/ControlBar';
import ControlMenu from '../../containers/Control/ControlMenu';
import {Control} from '../../styles';
import {View, ActivityIndicator, AsyncStorage, Alert, Text} from 'react-native';
import Contacts from '../Contacts/Contacts';
import Endpoints from '../../assets/endpoints.json';
import Axios from 'axios';

/**
 * Holds various components inside the menu
 */
const Holder = (props: any) => {
  //endpoint to get user info
  const endpoint_getuser = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}`;
  //uri to get chat info
  const chatinfo_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.chats}/${Endpoints.all}`;
  //endpoint to get all users
  const endpoint_getusers = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}/${Endpoints.all}`;
  //show menu if true
  const [showMenu, setShowMenu] = useState(false);
  //active child is either chats(false) or contacts(true)
  const [activeChild, setActiveChild] = useState(false);
  //current user info
  const [user, setUser] = useState(undefined);
  const [users, setUsers] = useState();
  //hooks for chats
  const [userChats, setUserChats] = useState();
  //show/hide menu
  const toggleMenu = () => setShowMenu(!showMenu);

  //logged user info
  const userid = props.navigation.getParam('userid');

  /**
   * Get logged user information
   */
  const getUser = async () => {
    let res = await Axios.get(`${endpoint_getuser}/${userid}`, {
      headers: {
        'x-access-token': await AsyncStorage.getItem('JWT'),
      },
    });
    let data = res.data;

    if (data) {
      setUser(data);
    } else {
      Alert.alert('Failed to load user');
    }
  };

  /**
   * Get all releveant users
   */
  const getUsers = async () => {
    let res = await Axios.get(endpoint_getusers, {
      headers: {
        'x-access-token': await AsyncStorage.getItem('JWT'),
      },
    });

    let data = res.data;
    if (data) {
      setUsers(data);
    }
  };

  /**
   * Get info about a chat
   */
  const getChats = async () => {
    let res = await Axios.get(chatinfo_uri, {
      headers: {'x-access-token': await AsyncStorage.getItem('JWT')},
    });

    let data = res.data;

    if (data) setUserChats(data);
  };

  useEffect(() => {
    getUser();
    getUsers();
    getChats();
  }, []);

  if (!user)
    return <ActivityIndicator size="large" color={Control.Bar.Icon.color} />;

  const chats = (
    <Chats
      chats={userChats}
      setChats={setUserChats}
      getChats={getChats}
      user={user}
      users={users}
      getUsers={getUsers}
      setUser={setUser}
      toggleMenu={toggleMenu}
      showMenu={showMenu}
      navigation={props.navigation}
    />
  );

  const contacts = (
    <Contacts
      user={user}
      getUser={getUser}
      users={users}
      setUser={setUser}
      setUsers={setUsers}
      toggleMenu={toggleMenu}
      showMenu={showMenu}
      navigation={props.navigation}
    />
  );

  const child = activeChild ? contacts : chats;

  const controlbar = (
    <ControlBar
      navigation={props.navigation}
      toggleMenu={toggleMenu}
      isMain={true}
    />
  );

  const controlmenu = (
    <ControlMenu
      userid={userid}
      navigation={props.navigation}
      toggleMenu={toggleMenu}
      setActiveChild={setActiveChild}
    />
  );

  const hiddenMenu = <View style={{flex: 1}}>{child}</View>;

  const shownMenu = (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1.5}}>
        {controlbar}
        {controlmenu}
      </View>
      <View style={{flex: 2}}>{child}</View>
    </View>
  );

  const render = showMenu ? shownMenu : hiddenMenu;

  return render;
};

export default Holder;
