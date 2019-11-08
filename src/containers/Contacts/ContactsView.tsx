import React from 'react';
import ContactView from './ContactView';
import NewContactView from './NewContactView';
import {FlatList, View} from 'react-native';
import {Contact} from '../../styles';

/**
 * UI for all contacts
 */
const ContactsView = () => {
  const a = <ContactView />;
  const b = <NewContactView />;

  const data = [a, b];

  const c = true;

  return (
    <View style={Contact.ContactPreview.Wrapper}>
      <FlatList data={data} renderItem={({item}) => (c == true ? a : b)} />
    </View>
  );
};

export default ContactsView;
