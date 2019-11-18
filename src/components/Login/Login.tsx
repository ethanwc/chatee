import React, {useState, useEffect} from 'react';
import LoginView from '../../containers/Login/LoginView';
import {Vibration, AsyncStorage, Alert, Animated, Easing} from 'react-native';
import Endpoints from '../../assets/endpoints.json';
import Axios from 'axios';
/**
 * Login controller for application.
 * Handles login, and allows user to save info for auto login
 */
const Login = (props: any) => {
  const [username, setUsername] = useState('e@mail.com');
  const [password, setPassword] = useState('password');
  const [remember, setRemember] = useState(false);
  //Endpoint to login
  const login_endpoint = `${Endpoints.base}/${Endpoints.auth}/${Endpoints.login}`;
  //Endpoint to get user info
  const info_endpoint = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}`;

  /**
   * On start, check...
   */
  useEffect(() => {
    checkMemory();
  }, []);

  /**
   * Check for saved info
   */
  let checkMemory = async () => {
    let remembered = await AsyncStorage.getItem('REMEMBER');
    if (remembered === 'true') {
      setUsername((await AsyncStorage.getItem('REMEMBER_USER')) || '');
      setPassword((await AsyncStorage.getItem('REMEMBER_PASS')) || '');
      setRemember(true);
      loginanimation.start();
      handleLogin();
    }
  };

  /**
   * Gets the info for logged user
   */
  const getUserInfo = async (info: any) => {
    let res = await Axios.get(`${info_endpoint}/${info.email}`, {
      headers: {'x-access-token': await AsyncStorage.getItem('JWT')},
    });
    const data = res.data;

    if (data) {
      await AsyncStorage.setItem('USER', data.email);
      props.navigation.navigate('Holder', {
        userid: data.email,
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
        if (remember) {
          await AsyncStorage.setItem('REMEMBER_USER', userInfo.email);
          await AsyncStorage.setItem('REMEMBER_PASS', userInfo.password);
          await AsyncStorage.setItem('REMEMBER', 'true');
        } else await AsyncStorage.setItem('REMEMBER', 'false');
        getUserInfo(userInfo);
      } else {
        Alert.alert('Login Failed', data.message);
        Vibration.vibrate(1000);
      }
    }
  };

  //fancy login animation
  let spinvalue = new Animated.Value(0);

  let loginanimation = Animated.timing(spinvalue, {
    toValue: 1,
    duration: 3000,
    easing: Easing.inOut(Easing.quad),
    useNativeDriver: true,
  });

  return (
    <LoginView
      loginanimation={loginanimation}
      spinvalue={spinvalue}
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
