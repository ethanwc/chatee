import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {Profile} from '../../styles';
import {TextInput} from 'react-native-gesture-handler';
/**
 * View for displaying profile information.
 */
const ProfileView = (props: any) => {
  //icon to edit profile image
  const editImage = (
    <Icon
      onPress={() => props.updateProfileImage()}
      name="image"
      size={150}
      color={Profile.ProfileView.Icon.color}
    />
  );

  //todo: check if user has a profile image set?

  const imglocation =
    props.profileInfo.profile.picture === 'unset'
      ? require('../../assets/logo.png')
      : {uri: props.profileInfo.profile.picture};

  //tsx view profile
  const viewProfile = (
    <View style={Profile.ProfileView.Content}>
      <Image style={Profile.ProfileView.Image} source={imglocation} />
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
      <Image source={props.temp}/>

      <TextInput
        style={Profile.ProfileView.EditBox}
        value={props.about}
        placeholder="About"
        onChangeText={text => props.setAbout(text)}
      />

      <TextInput
        style={Profile.ProfileView.EditBox}
        value={props.location}
        placeholder="Location"
        onChangeText={text => props.setLocation(text)}
      />
    </View>
  );

  const whichProfile = !props.editingProfile ? viewProfile : editProfile;

  return <View style={Profile.ProfileView.Wrapper2}>{whichProfile}</View>;
};

export default ProfileView;
