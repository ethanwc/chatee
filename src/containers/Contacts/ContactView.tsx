import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback, Alert} from 'react-native';
import {Contact} from '../../styles';

/**
 * UI for a contact
 */
const ContactView = (props: any) => {
  return (
    <TouchableWithoutFeedback
      style={Contact.ContactPreview.Content}
      onPress={() =>
        props.navigation.navigate('Profile', {
          userinfo: props.email,
        })
      }>
      <View style={Contact.ContactPreview.Wrapper}>
        <View style={Contact.ContactPreview.Content}>
          <Image
            style={Contact.ContactPreview.Image}
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          />
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
