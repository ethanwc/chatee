import React from 'react';
import ProfileView from '../../containers/Profile/ProfileView';
import EditBar from '../../containers/Control/EditBar';
import {View, AsyncStorage} from 'react-native';

/**
 * Profile controller.
 * Handles showing own profile, and all others.
 */
const Profile = (props: any) => {
  const userinfo = props.navigation.getParam('userinfo');

  //determine if it is the user's profile or not
  const ownProfile = userinfo.email !== AsyncStorage.getItem('USER');

  return (
    <View style={{flex: 1}}>
      <EditBar navigation={props.navigation} edit={ownProfile} />
      <ProfileView userinfo={userinfo} ownProfile={ownProfile} />
    </View>
  );
};

export default Profile;
