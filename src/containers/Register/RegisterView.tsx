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
 * UI for register page
 */
const Register = (props: any) => {
  let spinvalue = new Animated.Value(0);

  let registeranimation = Animated.timing(spinvalue, {
    toValue: 1,
    duration: 3000,
    easing: Easing.inOut(Easing.cubic),
    useNativeDriver: true,
  });

  let spin = spinvalue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-1800deg'],
  });

  const handleRegister = () => {
    registeranimation.start();
    props.handleRegister();
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
          placeholder="Name"
          value={props.name}
          onChangeText={text => props.setName(text)}
        />
        <TextInput
          style={{
            height: 40,
            margin: 10,
            marginBottom: 0,
            borderColor: '#528F7D',
            borderWidth: 1,
          }}
          placeholder="Email"
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
          secureTextEntry={true}
          value={props.password}
          onChangeText={text => props.setPassword(text)}
        />
        <View style={{marginLeft: 10, marginRight: 10}}>
          <Button
            color="#528F7D"
            title="Sign Up"
            onPress={() => handleRegister()}
          />
        </View>
        <Text
          onPress={() => props.navigation.navigate('Login')}
          style={{textAlign: 'right', marginRight: 10}}>
          Already Registered?
        </Text>
      </View>
    </View>
  );
};

export default Register;
