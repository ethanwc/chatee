import React, {useState} from 'react';
import LoginView from '../../containers/Login/LoginView';
import {View, Text, Button, TextInput} from 'react-native';

const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <LoginView
      userName={userName}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
  );
};

export default Login;
