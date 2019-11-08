import React from 'react';
import {View, Image} from 'react-native';

/**
 * View for displaying profile information.
 */
const ProfileView = () => {
  return (
    <View>
      <Image source={require('../../assets/logo.png')} />
    </View>
  );
};

export default ProfileView;
