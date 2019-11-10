import React from 'react';
import NewContactView from './NewContactView';
import {View, Text, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import {Control} from '../../styles';
/**
 * Used to dispaly users while searching for new ones.
 */
const PotentialContactView = (props: any) => {
  let add = (
    <Icon
      onPress={() => props.navigation.addFriend()}
      name="add"
      size={40}
      color={Control.Bar.Icon.color}
    />
  );

  let remove = (
    <Icon
      onPress={() => props.navigation.addFriend()}
      name="remove"
      size={40}
      color={Control.Bar.Icon.color}
    />
  );

  let pending = (
    <Icon
      onPress={() => props.navigation.addFriend()}
      name="send"
      size={40}
      color={Control.Bar.Icon.color}
    />
  );

  let handleIcon = add;

  if (props.type === 'friends') handleIcon = remove;
  if (props.type === 'pending') handleIcon = pending;

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <NewContactView name={props.name} email={props.email} />
      {handleIcon}
    </View>
  );
};

export default PotentialContactView;
