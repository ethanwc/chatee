import React from 'react';
import {TextInput, View, Text, Button, Image} from 'react-native';

const Login = (props: any) => {
  const handleLogin = () => {};

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login</Text>
      <Button onPress={handleLogin} title="Sign In"></Button>
      <Text>New User?</Text>
    </View>
  );
};

export default Login;
