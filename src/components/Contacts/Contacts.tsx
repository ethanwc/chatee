import React, {useState, useEffect} from 'react';
import ContactsView from '../../containers/Contacts/ContactsView';
import ControlBar from '../../containers/Control/ControlBar';
import {Control} from '../../styles';
import {View, Alert, AsyncStorage, TimePickerAndroid, Text} from 'react-native';
import {FAB} from 'react-native-paper';
import SearchModal from '../Modal/SearchModal';
import Endpoints from '../../assets/endpoints.json';
import Axios from 'axios';

/**
 * Controller for contacts
 */
const Contacts = (props: any) => {
  //endpoint to send a friend request
  const endpoint_addfriend = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}/${Endpoints.friendRequest}`;
  //endpoint to handle a friend request
  const endpoint_handlefriend = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}/${Endpoints.handleFriend}`;
  //endpoint to remove a friend
  const endpoint_removefriend = `${Endpoints.base}/${Endpoints.version}/${Endpoints.users}/${Endpoints.removeFriend}`;
  //hook for rendering modal
  const [showModal, setShowModal] = useState(false);
  //hook for filtered contact members
  const [filteredUsers, setFilteredUsers] = useState();

  /**
   * Call init filter
   */
  useEffect(() => {
    filter(props.user, props.users);
  }, []);
  /**
   * Filter what potential contacts to show
   */
  const filter = (user: any, data: any) => {
    let tempUsers: any[] = [];

    for (let member of data) {
      if (user.email !== member.email) {
        //determine if friends
        let type = 'notfriends';
        if (user.friends.includes(member.email)) type = 'friends';
        if (
          user.outgoingFriendRequests.includes(member.email) ||
          user.incomingFriendRequests.includes(member.email)
        )
          type = 'pending';

        tempUsers.push({
          email: member.email,
          name: member.name,
          key: member.email,
          type: type,
        });
      }
    }
    setFilteredUsers([...tempUsers]);
  };

  /**
   * Send a friend request
   */

  const friendRequest = async (info: any) => {
    let res = await Axios.post(endpoint_addfriend, info, {
      headers: {
        'x-access-token': await AsyncStorage.getItem('JWT'),
      },
    });

    let data = res.data;

    if (data) {
      //reload user
      props.setUser(data);
      filter(data, [...props.users]);
    }
  };

  /**
   * Handle a friend request
   */

  const friendResponse = async (info: any) => {
    let res = await Axios.post(endpoint_handlefriend, info, {
      headers: {
        'x-access-token': await AsyncStorage.getItem('JWT'),
      },
    });

    let data = res.data;

    if (data) {
      //reload user
      props.setUser(data);
      filter(data, [...props.users]);
    }
  };

  /**
   * Remove a friend
   */
  const friendRemove = async (info: any) => {
    let res = await Axios.post(endpoint_removefriend, info, {
      headers: {
        'x-access-token': await AsyncStorage.getItem('JWT'),
      },
    });

    let data = res.data;

    if (data) {
      //reload user
      props.setUser(data);
      filter(data, [...props.users]);
    }
  };

  const fab = (
    <FAB
      style={Control.Fab.fab}
      icon="plus"
      onPress={() => setShowModal(true)}
    />
  );
  if (!props.users || !filteredUsers) return <Text>Something woang</Text>;

  let modal = (
    <SearchModal
      users={filteredUsers}
      showModal={showModal}
      setShowModal={setShowModal}
      friendRequest={friendRequest}
      friendRemove={friendRemove}
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
      <ContactsView
        navigation={props.navigation}
        user={props.user}
        users={filteredUsers}
        friendResponse={friendResponse}
        friendRemove={friendRemove}
      />
      {fab}
    </View>
  );
};

export default Contacts;
