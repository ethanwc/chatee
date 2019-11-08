import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Control} from '../../styles';

/**
 * UI for top control bar that goes back and searches
 */
const EditBar = (props: any) => {
  //back arrow
  const back = (
    <Icon
      onPress={() => props.navigation.goBack()}
      name="arrow-back"
      size={40}
      color={Control.Bar.Icon.color}
    />
  );

  //edit profile
  const edit =
    !props.editing && props.edit ? (
      <View style={Control.Bar.IconWrapper}>
        <Icon
          name="edit"
          size={40}
          color={Control.Bar.Icon.color}
          onPress={() => {
            props.setEditing(true);
          }}
        />
      </View>
    ) : null;

  //save profile
  //todo: post req update profile in profile
  const save = props.editing ? (
    <View style={Control.Bar.IconWrapper}>
      <Icon
        name="save"
        size={40}
        color={Control.Bar.Icon.color}
        onPress={() => {
          props.setEditing(false);
          props.handleSave();
        }}
      />
    </View>
  ) : null;

  //cancel edit profile
  const cancel = props.editing ? (
    <View style={Control.Bar.IconWrapper}>
      <Icon
        name="cancel"
        size={40}
        color={Control.Bar.Icon.color}
        onPress={() => props.setEditing(false)}
      />
    </View>
  ) : null;

  return (
    <View style={Control.Bar.Wrapper}>
      <View style={Control.Bar.IconWrapper}>{back}</View>
      <View style={Control.Bar.IconWrapper}>
        {edit}
        {save}
        {cancel}
      </View>
    </View>
  );
};

export default EditBar;
