import React, {useState} from 'react';
import LoginView from '../../containers/Login/LoginView';
import {Vibration, AsyncStorage, Alert} from 'react-native';
import Endpoints from '../../assets/endpoints.json';
import Axios from 'axios';
/**
 * Login controller for application.
 * Handles login, and allows user to save info for auto login
 */
const Login = (props: any) => {
  const [username, setUsername] = useState('ethan@mail.com');
  const [password, setPassword] = useState('password');
  const [remember, setRemember] = useState(false);
  //Endpoint to login
  const login_endpoint = `${Endpoints.base}/${Endpoints.auth}/${Endpoints.login}`;
  //Endpoint to get user info
  const info_endpoint = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}`;

  /**
   * Gets the info for logged user
   */
  const getUserInfo = async () => {
    let res = await Axios.get(info_endpoint, {
      headers: {'x-access-token': await AsyncStorage.getItem('JWT')},
    });
    const data = res.data;

    if (data) {
      await AsyncStorage.setItem('USER', data.email);
      props.navigation.navigate('Holder', {
        userinfo: data,
      });
    }
  };

  /**
   * Attempts login request to backend. If successfull, get user info and go to
   */
  const handleLogin = async () => {
    const userInfo = {
      email: username,
      password: password,
    };

    let res = await Axios.post(login_endpoint, userInfo);

    const data = res.data;
    if (data) {
      if (data.status === 200) {
        await AsyncStorage.setItem('JWT', data.token);
        getUserInfo();
      } else {
        Alert.alert('Login Failed', data.message);
        Vibration.vibrate(1000);
      }
    }
  };

  //todo: check if user has info saved... if so handle login early
  //todo: display wrong info msg...

  return (
    <LoginView
      navigation={props.navigation}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      remember={remember}
      setRemember={setRemember}
      handleLogin={handleLogin}
    />
  );
};

export default Login;
