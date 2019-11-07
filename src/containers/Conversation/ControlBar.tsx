import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Chats} from '../../styles';

/**
 * UI for top control bar in conversation
 */
const Controlbar = (props: any) => {
  return (
    <View style={Chats.Bar.Wrapper}>
      <View style={Chats.Bar.IconWrapper}>
        <Icon
          onPress={() => props.navigation.goBack()}
          name="arrow-back"
          size={40}
          color={Chats.Bar.Icon.color}
        />
      </View>
      <View style={Chats.Bar.IconWrapper}>
        <Icon name="search" size={40} color={Chats.Bar.Icon.color} />
      </View>
    </View>
  );
};

export default Controlbar;
