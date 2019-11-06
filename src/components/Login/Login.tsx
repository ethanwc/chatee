import React, {useState} from 'react';
import LoginView from '../../containers/Login/LoginView';
import {Alert} from 'react-native';

/**
 * Login controller for application.
 * Handles login, and allows user to save info for auto login
 */
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  /**
   * Attempts login request to backend.
   */
  const handleLogin = () => {
    //todo: axios post req to /auth/login use userName, Password
    Alert.alert(username, password);
  };

  return (
    <LoginView
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
