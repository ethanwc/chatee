import React, {useState} from 'react';
import {View, Image, Text, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import {Profile} from '../../styles';
import {TextInput} from 'react-native-gesture-handler';
import EditBar from '../../containers/Control/EditBar';

/**
 * View for displaying profile information.
 */
const ProfileView = (props: any) => {
  //hooks for updating profile info

  // if (!props.profileInfo.profile || !props.profileInfo.profile.about)
  //   return <Text>Loading</Text>;

  //is the profile being edited currently?
  const [editingProfile, setEditingProfile] = useState(false);

  const [about, setAbout] = useState(props.profileInfo.profile.about);
  const [location, setLocation] = useState(props.profileInfo.profile.location);

  //icon to edit profile image
  const editImage = (
    <Icon
      onPress={() => props.updateProfileImage()}
      name="image"
      size={150}
      color={Profile.ProfileView.Icon.color}
    />
  );

  //check if user has a profile image set
  // const imglocation =
  //   props.profileInfo.profile &&
  //   props.profileInfo.profile.picture &&
  //   props.profileInfo.profile.picture === 'unset'
  //     ? require('../../assets/logo.png')
  //     : {uri: props.profileInfo.profile.picture};

  //tsx view profile
  const viewProfile = (
    <View style={Profile.ProfileView.Content}>
      {/* <Image style={Profile.ProfileView.Image} source={imglocation} /> */}
      <Text style={Profile.ProfileView.HeaderText}>
        {props.profileInfo.email}
      </Text>
      <Text style={Profile.ProfileView.HeaderText}>
        {props.profileInfo.name}
      </Text>
      <Text style={Profile.ProfileView.HeaderText}>
        {props.profileInfo.profile.about}
      </Text>
      <Text style={Profile.ProfileView.HeaderText}>
        {props.profileInfo.profile.location}
      </Text>
    </View>
  );

  //tsx edit profile
  const editProfile = (
    <View style={Profile.ProfileView.Wrapper2}>
      {editImage}
      <Image source={props.temp} />

      <TextInput
        style={Profile.ProfileView.EditBox}
        value={about}
        placeholder="About"
        onChangeText={text => setAbout(text)}
      />

      <TextInput
        style={Profile.ProfileView.EditBox}
        value={location}
        placeholder="Location"
        onChangeText={text => setLocation(text)}
      />
    </View>
  );

  const whichProfile = !editingProfile ? viewProfile : editProfile;

  return (
    <View style={{flex: 1}}>
      <EditBar
        navigation={props.navigation}
        edit={props.ownProfile}
        editing={editingProfile}
        setEditing={setEditingProfile}
        handleSave={props.updateProfileInfo}
        about={about}
        location={location}
        picture={props.profileInfo.profile.picture}
      />
      <View style={Profile.ProfileView.Wrapper2}>{whichProfile}</View>
    </View>
  );
};

export default ProfileView;
