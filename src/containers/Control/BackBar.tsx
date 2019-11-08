import React from 'react';
import {View} from 'react-native';
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
      {search}
    </View>
  );
};

export default Controlbar;
