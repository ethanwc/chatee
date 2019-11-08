import React from 'react';
import ContactView from './ContactView';
import NewContactView from './NewContactView';
import {FlatList, View, TouchableNativeFeedback} from 'react-native';
import {Contact} from '../../styles';

/**
 * UI for all contacts
 */
const ContactsView = (props: any) => {
  const a = <ContactView />;
  const b = <NewContactView />;

  const d = <ContactView navigation={props.navigation} />;

  const data = [a, b];

  const c = true;

  return (
    <View style={Contact.ContactPreview.Wrapper}>
      {/* <FlatList data={data} renderItem={({item}) => (c == true ? a : b)} /> */}
      <FlatList data={data} renderItem={({item}) => d} />
    </View>
  );
};

export default ContactsView;
