import React, {useState, useEffect} from 'react';
import Chats from '../Chats/Chats';
import ControlBar from '../../containers/Control/ControlBar';
import ControlMenu from '../../containers/Control/ControlMenu';
import {View, ActivityIndicator, AsyncStorage, Alert} from 'react-native';
import Contacts from '../Contacts/Contacts';
import Endpoints from '../../assets/endpoints.json';
import Axios from 'axios';

/**
 * Holds various components inside the menu
 */
const Holder = (props: any) => {
  //endpoint to get user info
  const endpoint_getuser = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}`;
  //show menu if true
  const [showMenu, setShowMenu] = useState(false);
  //active child is either chats(false) or contacts(true)
  const [activeChild, setActiveChild] = useState(false);
  //current user info
  const [user, setUser] = useState();
  const [users, setUsers] = useState(Array<any>());

  //show/hide menu
  const toggleMenu = () => setShowMenu(!showMenu);

  /**
   * Get logged user information
   */
  const getUser = async () => {
    let res = await Axios.get(endpoint_getuser, {
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

  useEffect(() => {
    let temp = async () => {
      await getUser();
    };
    temp();
  }, []);

  const chats = (
    <Chats
      toggleMenu={toggleMenu}
      showMenu={showMenu}
      navigation={props.navigation}
    />
  );

  const contacts = (
    <Contacts
      getUser={getUser}
      user={user}
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
      navigation={props.navigation}
      toggleMenu={toggleMenu}
      setActiveChild={setActiveChild}
    />
  );

  const hiddenMenu = <View style={{flex: 1}}>{child}</View>;

  const shownMenu = (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1}}>
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
