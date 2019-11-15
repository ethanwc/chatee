import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import {Control, Contact} from '../../styles';
import ContactView from './ContactView';
/**
 * Used to dispaly users while searching for new ones.
 */
const PotentialContactView = (props: any) => {
  let add = (
    <Icon
      onPress={() => {
        props.friendRequest({potentialFriend: props.email});
      }}
      name="add"
      size={40}
      color={Control.Bar.Icon.color}
    />
  );

  let pending = (
    <Icon
      onPress={() => Alert.alert('Request already pending')}
      name="done"
      size={40}
      color={Control.Bar.Icon.color}
    />
  );

  let remove = (
    <Icon
      onPress={() => props.friendRemove({friend: props.email})}
      name="remove"
      size={40}
      color={Control.Bar.Icon.color}
    />
  );

  let handleIcon = add;

  if (props.type === 'set') handleIcon = remove;
  if (props.type === 'pending') handleIcon = pending;

  return (
    <View style={Contact.ContactPreview.Wrapper}>
      <View style={Contact.ContactPreview.Content}>
        <ContactView
          navigation={props.navigation}
          name={props.name}
          email={props.email}
          picture={props.picture}
        />
        {handleIcon}
      </View>
    </View>
  );
};

export default PotentialContactView;
