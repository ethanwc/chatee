import React, {useState, useEffect} from 'react';
import Chats from '../Chats/Chats';
import ControlBar from '../../containers/Control/ControlBar';
import ControlMenu from '../../containers/Control/ControlMenu';
import {Control} from '../../styles';
import {
  View,
  ActivityIndicator,
  AsyncStorage,
  Alert,
  Text,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import Contacts from '../Contacts/Contacts';
import Endpoints from '../../assets/endpoints.json';
import Axios from 'axios';
import Pushy from 'pushy-react-native';

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
  //uri to register pushy token
  const devicetoken_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}/${Endpoints.device}`;
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

  // Please place this code in App.js,
  // After the import statements, and before the Component class

  Pushy.setNotificationListener(async (data: {message: string}) => {
    // Notification title
    let notificationTitle = 'Chatee';

    // Attempt to extract the "message" property from the payload: {"message":"Hello World!"}
    let notificationText = data.message || '';

    // Display basic system notification
    Pushy.notify(notificationTitle, notificationText);
  });

  useEffect(() => {
    getUser();
    getUsers();
    getChats();

    Pushy.listen();
    // Only necessary for Android
    if (Platform.OS === 'android') {
      // Check whether the user has granted the app the WRITE_EXTERNAL_STORAGE permission
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ).then(granted => {
        if (!granted) {
          // Request the WRITE_EXTERNAL_STORAGE permission so that the Pushy SDK will be able to persist the device token in the external storage
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          ).then(result => {
            // User denied permission?
            if (result !== PermissionsAndroid.RESULTS.GRANTED) {
              // Possibly ask the user to grant the permission
            }
          });
        }
      });
    }

    // Register the device for push notifications
    Pushy.register()
      .then(async (deviceToken: string) => {
        registerDevice(deviceToken);
      })
      .catch((err: any) => {
        // Handle registration errors
        Alert.alert('Pushy error', err);
      });
  }, []);

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

  /**
   * Register device token
   */
  const registerDevice = async (token: any) => {
    await Axios.get(`${devicetoken_uri}/${token}`, {
      headers: {
        'x-access-token': await AsyncStorage.getItem('JWT'),
      },
    });
  };
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
