import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback, Alert} from 'react-native';
import {Contact} from '../../styles';

/**
 * UI for a contact
 */
const ContactView = (props: any) => {
  //check if user has a profile image set
  const imglocation =
    props.picture === 'unset'
      ? require('../../assets/logo.png')
      : {uri: props.picture};

  return (
    <TouchableWithoutFeedback
      style={Contact.ContactPreview.Content}
      onPress={() =>
        props.navigation.navigate('Profile', {
          profileid: props.email,
          reload: true,
        })
      }>
      <View style={Contact.ContactPreview.Wrapper}>
        <View style={Contact.ContactPreview.Content}>
          <Image style={Contact.ContactPreview.Image} source={imglocation} />
          <View style={{flexDirection: 'column'}}>
            <Text style={Contact.ContactPreview.BodyText}>{props.name}</Text>
            <Text style={Contact.ContactPreview.BodyText}>{props.email}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default ContactView;
