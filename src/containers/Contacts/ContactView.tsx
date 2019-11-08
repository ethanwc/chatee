import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {Contact} from '../../styles';

/**
 * UI for a contact
 */
const ContactView = (props: any) => {
  const name = 'Steve Jobs';
  return (
    <TouchableWithoutFeedback
      style={Contact.ContactPreview.Content}
      onPress={() =>
        props.navigation.navigate('Profile', {
          userinfo: 'asdf',
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
          <Text style={Contact.ContactPreview.HeaderText}>{name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default ContactView;
