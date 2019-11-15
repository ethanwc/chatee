import React from 'react';
import ContactView from './ContactView';
import {FlatList, View, TouchableNativeFeedback, Text} from 'react-native';
import {Contact} from '../../styles';
import SearchContactView from './SearchContactView';
import {Icon} from 'react-native-elements';
import {ActivityIndicator} from 'react-native-paper';
/**
 * UI for all contacts
 */
const ContactsView = (props: any) => {
  let friends = [],
    incomingFriends = [];
  let search = props.search.toString().toLowerCase();

  if (!props.user || !props.user.incomingFriendRequests)
    return (
      <ActivityIndicator
        size="large"
        color={Contact.ContactPreview.Icon.color}
      />
    );

  for (let user of props.users) {
    //filter by search
    if (
      user.name
        .toString()
        .toLowerCase()
        .includes(search) ||
      user.email
        .toString()
        .toLowerCase()
        .includes(search)
    ) {
      if (props.user.incomingFriendRequests.includes(user.email))
        incomingFriends.push({
          name: user.name,
          email: user.email,
          picture: user.picture,
        });

      if (props.user.friends.includes(user.email))
        friends.push({
          name: user.name,
          email: user.email,
          picture: user.picture,
        });
    }
  }

  let friendRequestsView =
    props.user.incomingFriendRequests.length > 0 ? (
      <View style={{flex: 2}}>
        <Text style={Contact.ContactPreview.HeaderText}>Friend Requests</Text>
        <FlatList
          data={incomingFriends}
          renderItem={({item}: any) => (
            <SearchContactView
              navigation={props.navigation}
              picture={item.picture}
              name={item.name}
              email={item.email}
              friendResponse={props.friendResponse}
              friendRemove={props.friendRemove}
            />
          )}
        />
      </View>
    ) : null;

  let friendsView = (
    <View style={{flex: 4}}>
      <Text style={Contact.ContactPreview.HeaderText}>Friends</Text>
      <FlatList
        data={friends}
        renderItem={({item}: any) => (
          <View style={{flexDirection: 'row'}}>
            <ContactView
              picture={item.picture}
              name={item.name}
              email={item.email}
              navigation={props.navigation}
            />
            <Icon
              onPress={() =>
                props.friendRemove({
                  friend: item.email,
                })
              }
              name="remove"
              size={40}
              color={Contact.ContactPreview.Icon.color}
            />
          </View>
        )}
      />
    </View>
  );

  return (
    <View style={Contact.ContactPreview.Wrapper}>
      {friendRequestsView}
      {friendsView}
    </View>
  );
};

export default ContactsView;
