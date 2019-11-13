import React, {useState, useEffect} from 'react';
import Endpoints from '../../assets/endpoints.json';
import ProfileView from '../../containers/Profile/ProfileView';
import {AsyncStorage, Alert, ActivityIndicator} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Axios from 'axios';

/**
 * Profile controller.
 * Handles showing own profile, and all others.
 */
const Profile = (props: any) => {
  //uri for getting profile info
  const getuser_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}`;
  //uri for updating profile
  const updateprofile_uri = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}/${Endpoints.profile}`;
  //uri for cloudinary
  const cloudinary_url =
    'https://api.cloudinary.com/v1_1/dk4gnl6ww/image/upload';

  //id of user who's profile is being viewed
  const profileid = props.navigation.getParam('profileid');

  //profile info for profile being viewed
  const [profileInfo, setProfileInfo] = useState();

  //is the profile that of the logged user?
  const [ownProfile, setOwnProfile] = useState(false);

  /**
   * Init load
   */
  useEffect(() => {
    const temp = async () => {
      await getProfileInfo();
    };
    temp();
  }, []);

  /**
   * Load info for the profile being viewed
   */
  const getProfileInfo = async () => {
    let res = await Axios.get(`${getuser_uri}/${profileid}`, {
      headers: {'x-access-token': await AsyncStorage.getItem('JWT')},
    });

    let data = res.data;

    if (data) {
      setProfileInfo(data);
      setOwnProfile((await AsyncStorage.getItem('USER')) === data.email);
    }
  };

  //loading
  if (!profileInfo) return <ActivityIndicator size="large" color="#0000ff" />;

  /**
   * Update user's profile picture
   */
  const updateProfileImage = async () => {
    const options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      base64: true,
    };

    //select image to upload
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        let base64Img = `data:image/jpg;base64,${response.data}`;
        upload(base64Img);
      }
    });
  };

  const upload = async (source: any) => {
    var body = new FormData();
    body.append('file', source);
    body.append('upload_preset', 'ajp1noec');

    Axios.post(cloudinary_url, body)
      .then((res: any) => {
        const info = {
          profile: {
            about: profileInfo.profile.about,
            location: profileInfo.profile.location,
            picture: res.url,
          },
        };
        updateProfileInfo(info);
      })
      .catch((error: any) => {
        Alert.alert('error', error.message);
      });
  };

  /**
   * Updates user's profile info
   */
  const updateProfileInfo = async (info: any) => {
    let res = await Axios.patch(updateprofile_uri, info, {
      headers: {'x-access-token': await AsyncStorage.getItem('JWT')},
    });

    let data = res.data;
    if (data) setProfileInfo(data);
  };

  return (
    <ProfileView
      navigation={props.navigation}
      profileInfo={profileInfo}
      updateProfileInfo={updateProfileInfo}
      ownProfile={ownProfile}
      updateProfileImage={updateProfileImage}
    />
  );
};

export default Profile;
