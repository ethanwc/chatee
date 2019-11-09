import React from 'react';
import ContactsView from '../../containers/Contacts/ContactsView';
import ControlBar from '../../containers/Control/ControlBar';
import {Control} from '../../styles';
import {View, Alert} from 'react-native';
import {FAB} from 'react-native-paper';

/**
 * Controller for contacts
 */
const Contacts = (props: any) => {
  const fab = (
    <FAB
      style={Control.Fab.fab}
      icon="plus"
      onPress={() => console.log(Alert.alert('pressed'))}
    />
  );

  return (
    <View style={{flex: 1}}>
      <ControlBar
        navigation={props.navigation}
        toggleMenu={props.toggleMenu}
        showMenu={props.showMenu}
        isMain={false}
      />
      <ContactsView navigation={props.navigation} />
      {fab}
    </View>
  );
};

export default Contacts;
