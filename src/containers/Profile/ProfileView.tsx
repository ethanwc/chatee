import React from 'react';
import {View, Image, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {Profile} from '../../styles';
/**
 * View for displaying profile information.
 */
const ProfileView = (props: any) => {
  const userinfo = props.userinfo;
  const ownProfile = props.ownProfile;

  return (
    <View style={Profile.ProfileView.Wrapper}>
      <View style={Profile.ProfileView.Content}>
        <Image source={require('../../assets/logo.png')} />
        <Text>{userinfo.email}</Text>
        <Text>Name</Text>
        {/* <Text>Friends?</Text> */}
        <Text>About</Text>
        <Text>Location</Text>
      </View>
    </View>
  );
};

export default ProfileView;
