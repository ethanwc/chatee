import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Chat} from '../../styles';

/**
 * UI for top control bar in conversation
 */
const Controlbar = (props: any) => {
  return (
    <View style={Chat.Bar.Wrapper}>
      <View style={Chat.Bar.IconWrapper}>
        <Icon
          onPress={() => props.navigation.goBack()}
          name="arrow-back"
          size={40}
          color={Chat.Bar.Icon.color}
        />
      </View>
      <View style={Chat.Bar.IconWrapper}>
        <Icon name="search" size={40} color={Chat.Bar.Icon.color} />
      </View>
    </View>
  );
};

export default Controlbar;
