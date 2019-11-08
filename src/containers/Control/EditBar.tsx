import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Control} from '../../styles';

/**
 * UI for top control bar that goes back and searches
 */
const EditBar = (props: any) => {
  const edit = props.edit ? (
    <View style={Control.Bar.IconWrapper}>
      <Icon name="edit" size={40} color={Control.Bar.Icon.color} />
    </View>
  ) : null;

  return (
    <View style={Control.Bar.Wrapper}>
      <View style={Control.Bar.IconWrapper}>
        <Icon
          onPress={() => props.navigation.goBack()}
          name="arrow-back"
          size={40}
          color={Control.Bar.Icon.color}
        />
      </View>
      {edit}
    </View>
  );
};

export default EditBar;
