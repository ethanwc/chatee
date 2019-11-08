import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Control} from '../../styles';

/**
 * UI for top control bar in conversation
 */
const Controlbar = (props: any) => {
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
        <Icon name="search" size={40} color={Control.Bar.Icon.color} />
      </View>
    </View>
  );
};

export default Controlbar;
