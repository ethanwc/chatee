import React from 'react';
import ContactView from './ContactView';
import {FlatList, View, TouchableNativeFeedback, Text} from 'react-native';
import {Contact} from '../../styles';
import SearchContactView from './SearchContactView';
import {Icon} from 'react-native-elements';
/**
 * UI for all contacts
 */
const ContactsView = (props: any) => {
  const a = <ContactView />;

  const d = <ContactView navigation={props.navigation} />;

  let friends = [],
    incomingFriends = [];

  if (!props.user || !props.user.incomingFriendRequests)
    return <Text> Loading</Text>;

  for (let user of props.users) {
    if (props.user.incomingFriendRequests.includes(user.email))
      incomingFriends.push({name: user.name, email: user.email});

    if (props.user.friends.includes(user.email))
      friends.push({name: user.name, email: user.email});
  }

  const c = true;

  let friendRequestsView =
    props.user.incomingFriendRequests.length > 0 ? (
      <View style={{flex: 2}}>
        <Text style={Contact.ContactPreview.HeaderText}>Friend Requests</Text>
        <FlatList
          data={incomingFriends}
          renderItem={({item}) => (
            <SearchContactView
              navigation={props.navigation}
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
        renderItem={({item}) => (
          <View style={{flexDirection: 'row'}}>
            <ContactView
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
