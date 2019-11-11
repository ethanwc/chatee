import React, {useState} from 'react';
import Endpoints from '../../assets/endpoints.json';
import ProfileView from '../../containers/Profile/ProfileView';
import EditBar from '../../containers/Control/EditBar';
import {View, AsyncStorage, Alert} from 'react-native';
import Axios from 'axios';

/**
 * Profile controller.
 * Handles showing own profile, and all others.
 */
const Profile = (props: any) => {
  //uri for cloudinary
  //todo: update
  const cloudinary_url =
    'https://api.cloudinary.com/v1_1/dk4gnl6ww/image/upload';

  //uri for updating profile
  const profile_uri = `${Endpoints.base}/${Endpoints.users}/${Endpoints.profile}`;

  //is the profile being edited currently?
  const [editingProfile, setEditingProfile] = useState(false);
  const userinfo = props.navigation.getParam('userinfo');

  //hooks for updating profile info
  const [about, setAbout] = useState(userinfo.about);
  const [name, setName] = useState(userinfo.name);
  const [location, setLocation] = useState(userinfo.name);

  //determine if it is the user's profile or not
  const ownProfile = userinfo.email !== AsyncStorage.getItem('USER');

  let profileInfo = undefined;


  //todo: convert profile to fetch data and progress

  //edit profile image
  //todo: photo location?
  const updateProfileImage = async (data: any) => {
    let res = await Axios.post(cloudinary_url, data);

    if (res) {
    }

    //successful upload ... update profile info with new uri
  };

  //update profile information
  //todo: profile data
  const updateProfileInfo = async (data: any) => {
    let res = await Axios.post(profile_uri, data);

    if (res) {
    }
  };

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
