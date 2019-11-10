import React, {useState, useEffect} from 'react';
import ContactsView from '../../containers/Contacts/ContactsView';
import ControlBar from '../../containers/Control/ControlBar';
import {Control} from '../../styles';
import {View, Alert, AsyncStorage} from 'react-native';
import {FAB} from 'react-native-paper';
import SearchModal from '../Modal/SearchModal';
import Endpoints from '../../assets/endpoints.json';
import Axios from 'axios';

/**
 * Controller for contacts
 */
const Contacts = (props: any) => {
  //hook for rendering modal
  const [showModal, setShowModal] = useState(false);
  //endpoint to get all users
  const endpoint_getusers = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}/${Endpoints.all}`;

  const [rendered, setRendered] = useState(false);

  const [users, setUsers] = useState(Array<any>());

  const fab = (
    <FAB
      style={Control.Fab.fab}
      icon="plus"
      onPress={() => setShowModal(true)}
    />
  );

  const getUsers = async () => {
    let res = await Axios.get(endpoint_getusers, {
      headers: {
        'x-access-token': await AsyncStorage.getItem('JWT'),
      },
    });

    let data = res.data;

    let tempUsers: any[] = [];

    for (let user of data)
      tempUsers.push({email: user.email, name: user.name, key: user.email});

    setUsers(tempUsers);
  };

  if (!rendered) {
    getUsers();
    setRendered(true);
  }

  let modal = (
    <SearchModal
      users={users}
      showModal={showModal}
      setShowModal={setShowModal}
    />
  );

  return (
    <View style={{flex: 1}}>
      {modal}

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
