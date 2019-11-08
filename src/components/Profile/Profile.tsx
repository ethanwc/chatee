import React, {useState} from 'react';
import ProfileView from '../../containers/Profile/ProfileView';
import EditBar from '../../containers/Control/EditBar';
import {View, AsyncStorage, Alert} from 'react-native';

/**
 * Profile controller.
 * Handles showing own profile, and all others.
 */
const Profile = (props: any) => {
  //is the profile being edited currently?
  const [editingProfile, setEditingProfile] = useState(false);
  const userinfo = props.navigation.getParam('userinfo');

  //hooks for updating profile info
  const [about, setAbout] = useState(userinfo.about);
  const [name, setName] = useState(userinfo.name);
  const [location, setLocation] = useState(userinfo.name);

  //determine if it is the user's profile or not
  const ownProfile = userinfo.email !== AsyncStorage.getItem('USER');

  //edit profile image
  const updateProfileImage = () => {};

  //update profile information
  const updateProfileInfo = () => {};

  return (
    <View style={{flex: 1}}>
      <EditBar
        navigation={props.navigation}
        edit={ownProfile}
        editing={editingProfile}
        setEditing={setEditingProfile}
        handleSave={updateProfileInfo}
      />

      <ProfileView
        userinfo={userinfo}
        ownProfile={ownProfile}
        editingProfile={editingProfile}
        about={about}
        setAbout={setAbout}
        name={name}
        setName={setName}
        location={location}
        setLocation={setLocation}
        updateProfileImage={updateProfileImage}
        updateProfileInfo={updateProfileInfo}
      />
    </View>
  );
};

export default Profile;
