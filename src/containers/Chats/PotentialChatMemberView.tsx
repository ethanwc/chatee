import React from 'react';
import {View, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import {Control, Contact} from '../../styles';
import ContactView from '../Contacts/ContactView';
/**
 * Used to dispaly users while searching for new ones.
 */
const PotentialMemberView = (props: any) => {
  let add = (
    <Icon
      onPress={() => {
        props.friendRequest({newuser: props.email, chatid: props.chatid});
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
      onPress={() =>
        props.friendRemove({removeuser: props.email, chatid: props.chatid})
      }
      name="remove"
      size={40}
      color={Control.Bar.Icon.color}
    />
  );

  let unauth = <Icon name="" size={40} color={Control.Bar.Icon.color} />;

  let handleIcon = unauth;

  if (props.type === 'set') handleIcon = remove;
  if (props.type === 'pending') handleIcon = pending;
  if (props.type === 'unset') handleIcon = add;

  return (
    <View style={Contact.ContactPreview.Wrapper}>
      <View style={Contact.ContactPreview.Content}>
        <ContactView picture={props.picture} name={props.name} email={props.email} />
        {handleIcon}
      </View>
    </View>
  );
};

export default PotentialMemberView;
