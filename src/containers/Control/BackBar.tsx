import React from 'react';
import {View, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import {Control} from '../../styles';

/**
 * UI for top control bar that goes back and searches
 */
const Controlbar = (props: any) => {
  const search = props.search ? (
    <View style={Control.Bar.IconWrapper}>
      <Icon name="search" size={40} color={Control.Bar.Icon.color} />
    </View>
  ) : null;

  const settings = props.settings ? (
    <View style={Control.Bar.IconWrapper}>
      <Icon
        name="group-add"
        size={40}
        color={Control.Bar.Icon.color}
        onPress={() => props.toggleSettings(true)}
      />
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

      <View style={Control.Bar.IconWrapper}>
        {settings}
        {search}
      </View>
    </View>
  );
};

export default Controlbar;
