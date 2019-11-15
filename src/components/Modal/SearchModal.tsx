import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, Button, AsyncStorage, Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import PotentialContentView from '../../containers/Contacts/PotentialContactView';
import PotentialMemberView from '../../containers/Chats/PotentialChatMemberView';

/**
 * Modal that has a search bar
 */
const SearchModal = (props: any) => {
  //hook for filtering search
  const [search, setSearch] = useState('');

  let filteredUsers: any[] = [];

  //lower case search filtering
  for (let user of props.users)
    if (
      user.email
        .toString()
        .toLowerCase()
        .includes(search.toLowerCase())
    ) {
      filteredUsers.push({
        key: user.key,
        email: user.email,
        type: user.type,
        name: user.name,
        picture: user.picture,
      });
    }

  return (
    <Modal isVisible={props.showModal}>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text>Search Users!</Text>
          <TextInput
            placeholder="Search Members"
            value={search}
            onChangeText={text => setSearch(text)}
          />

          <FlatList
            data={filteredUsers}
            renderItem={({item}) =>
              props.type === 'chats' ? (
                <PotentialMemberView
                  navigation={props.navigation}
                  picture={item.picture}
                  name={item.name}
                  email={item.key}
                  type={item.type}
                  friendRequest={props.friendRequest}
                  friendRemove={props.friendRemove}
                  chatid={props.chatid}
                />
              ) : (
                <PotentialContentView
                  navigation={props.navigation}
                  picture={item.picture}
                  name={item.name}
                  email={item.key}
                  type={item.type}
                  friendRequest={props.friendRequest}
                  friendRemove={props.friendRemove}
                />
              )
            }
          />
          <Button title="Done" onPress={() => props.setShowModal(false)} />
        </View>
      </View>
    </Modal>
  );
};

export default SearchModal;
