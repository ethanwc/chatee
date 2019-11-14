import React from 'react';
import {
  TextInput,
  View,
  Button,
  CheckBox,
  Text,
  Animated,
  Easing,
} from 'react-native';

/**
 * UI for login page
 */
const Login = (props: any) => {
  let spin = props.spinvalue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1800deg'],
  });

  const handleLogin = () => {
    props.loginanimation.start();
    props.handleLogin();
  };

  return (
    <View style={{flex: 1, backgroundColor: '#D5E8E4'}}>
      <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
        <Animated.Image
          style={{transform: [{rotate: spin}]}}
          source={require('../../assets/logo.png')}
        />
      </View>
      <View style={{flex: 5}}>
        <TextInput
          style={{
            height: 40,
            margin: 10,
            marginBottom: 0,
            borderColor: '#528F7D',
            borderWidth: 1,
          }}
          placeholder="Username"
          value={props.username}
          onChangeText={text => props.setUsername(text)}
        />
        <TextInput
          style={{
            height: 40,
            margin: 10,
            borderColor: '#528F7D',
            borderWidth: 1,
          }}
          placeholder="Password"
          value={props.password}
          secureTextEntry={true}
          onChangeText={text => props.setPassword(text)}
        />
        <View style={{marginLeft: 10, marginRight: 10}}>
          <Button
            color="#528F7D"
            title="Sign In"
            onPress={() => handleLogin()}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: 5,
            marginRight: 10,
          }}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <CheckBox
              value={props.remember}
              onValueChange={() => props.setRemember(!props.remember)}
            />
            <Text>Remember Login</Text>
          </View>
          <View>
            <Text onPress={() => props.navigation.navigate('Register')}>
              New User?
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
