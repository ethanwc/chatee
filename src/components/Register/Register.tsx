import React, {useState} from 'react';
import RegisterView from '../../containers/Register/RegisterView';
import {Alert, Vibration} from 'react-native';
import Endpoints from '../../assets/endpoints.json';
import Axios from 'axios';
/**
 * Register controller for application.
 * Handles Register, and allows user to save info for auto Register
 */
const Register = (props: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [remember, setRemember] = useState(false);
  //Endpoint to register
  const register_endpoint = `${Endpoints.base}/${Endpoints.auth}/${Endpoints.register}`;

  /**
   * Attempts Register request to backend.
   */
  const handleRegister = async () => {
    const userInfo = {
      email: username,
      password: password,
      name: name,
    };

    let res = await Axios.post(register_endpoint, userInfo);

    const data = res.data;
    //stop spinning
    if (data) {
      if (data.status === 201) {
        props.navigation.goBack();
        //todo: stop spining, rediect
      } else {
        Vibration.vibrate(1000);
        Alert.alert('Sign Up Failed', data.message);
      }
    }
  };

  return (
    <RegisterView
      navigation={props.navigation}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      remember={remember}
      setRemember={setRemember}
      handleRegister={handleRegister}
      name={name}
      setName={setName}
    />
  );
};

export default Register;
