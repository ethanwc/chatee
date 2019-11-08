import React from 'react';
import ContactsView from '../../containers/Contacts/ContactsView';
import ControlBar from '../../containers/Control/ControlBar';

import {View} from 'react-native';

/**
 * Controller for contacts
 */
const Contacts = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <ControlBar
        navigation={props.navigation}
        toggleMenu={props.toggleMenu}
        showMenu={props.showMenu}
        isMain={false}
      />
      <ContactsView />
    </View>
  );
};

export default Contacts;
