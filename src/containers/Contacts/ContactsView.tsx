import React from 'react';
import ContactView from './ContactView';
import {FlatList, View} from 'react-native';
import {Contact} from '../../styles';

/**
 * UI for all contacts
 */
const ContactsView = () => {
  return (
    <View style={Contact.ContactPreview.Wrapper}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dan'},
          {key: 'Dan'},
          {key: 'Dan'},
          {key: 'Dan'},
          {key: 'Dan'},
          {key: 'Dan'},
          {key: 'Dan'},
          {key: 'Dan'},
        ]}
        renderItem={({item}) => <ContactView test={item.key} />}
      />
    </View>
  );
};

export default ContactsView;
