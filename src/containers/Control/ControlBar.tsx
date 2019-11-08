import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {Control} from '../../styles';

/**
 * UI for top control bar
 */
const Controlbar = (props: any) => {
  const menu = !props.showMenu ? (
    <Icon
      onPress={() => props.toggleMenu()}
      name="menu"
      size={40}
      color={Control.Bar.Icon.color}
    />
  ) : null;

  const search =
    !props.showMenu && !props.isMain ? (
      <Icon
        onPress={() => props.toggleMenu()}
        name="search"
        size={40}
        color={Control.Bar.Icon.color}
      />
    ) : null;

  const title = !props.showMenu && !props.isMain ? <Text>asdf</Text> : null;
  return (
    <View style={Control.Bar.Wrapper}>
      <View style={Control.Bar.IconWrapper}>{menu}</View>
      <View style={Control.Bar.IconWrapper}>{title}</View>

      <View style={Control.Bar.IconWrapper}>{search}</View>
    </View>
  );
};

export default Controlbar;