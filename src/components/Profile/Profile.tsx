import React, {useState, useEffect} from 'react';
import Endpoints from '../../assets/endpoints.json';
import ProfileView from '../../containers/Profile/ProfileView';
import EditBar from '../../containers/Control/EditBar';
import {View, AsyncStorage, Alert, ActivityIndicator} from 'react-native';
import Axios from 'axios';

/**
 * Profile controller.
 * Handles showing own profile, and all others.
 */
const Profile = (props: any) => {
  //uri for getting profile info
  const endpoint_getuser = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}`;
  //uri for updating profile
  const profile_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}/${Endpoints.profile}`;
  //uri for cloudinary
  const cloudinary_url =
    'https://api.cloudinary.com/v1_1/dk4gnl6ww/image/upload';

  //is the profile being edited currently?
  const [editingProfile, setEditingProfile] = useState(false);

  //profile info for profile being viewed
  const [profileInfo, setProfileInfo] = useState();

  //id of user who's profile is being viewed
  const profileid = props.navigation.getParam('profileid');

  /**
   * Load info for the profile being viewed
   */
  const getProfileInfo = async () => {
    Alert.alert('getting info for', profileid);
    let res = await Axios.get(`${endpoint_getuser}/${profileid}`, {
      headers: {'x-access-token': await AsyncStorage.getItem('JWT')},
    });

    let data = res.data;

    if (data) setProfileInfo(data);
  };

  useEffect(() => {
    const temp = async () => {
      await getProfileInfo();
    };
    temp();
  }, []);

  //loading
  if (!profileInfo) return <ActivityIndicator size="large" color="#0000ff" />;

  //need new user info
  // if (profileid !== profileInfo.email) getProfileInfo();

  //determine if it is the user's profile or not
  const ownProfile = profileid !== AsyncStorage.getItem('USER');

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
    let res = await Axios.get(profile_uri, data);

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
        profileInfo={profileInfo}
        ownProfile={ownProfile}
        editingProfile={editingProfile}
        updateProfileImage={updateProfileImage}
        updateProfileInfo={updateProfileInfo}
      />
    </View>
  );
};

export default Profile;
