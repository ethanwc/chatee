import React from 'react';
import {View, Image, Text} from 'react-native';
import {Contact} from '../../styles';
import {Icon} from 'react-native-elements';

const ContactView = (props: any) => {
  const name = 'Steve Jobs';
  return (
    <View style={Contact.ContactPreview.Content}>
      <Image
        style={Contact.ContactPreview.Image}
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
        }}
      />
      <View style={Contact.ContactPreview.Wrapper}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={Contact.ContactPreview.HeaderText}>{name}</Text>
        </View>
      </View>
    </View>
  );
};
export default ContactView;
