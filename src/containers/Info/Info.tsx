import React from 'react';
import {View, Text} from 'react-native';
import {Profile} from '../../styles';

export const Info = () => {
  return (
    <View style={Profile.ProfileView.Wrapper2}>
      <View style={Profile.ProfileView.Content}>
        <Text style={Profile.ProfileView.HeaderText}>Info about Messagee</Text>
        <Text style={Profile.ProfileView.BodyText}>
          Designed and Developed by Ethan Cheatham using react native
        </Text>
        <Text style={Profile.ProfileView.BodyText}>View source code at</Text>
        <Text style={Profile.ProfileView.BodyText}>
          github.com/ethanwc/chatee
        </Text>
      </View>
    </View>
  );
};

export default Info;
