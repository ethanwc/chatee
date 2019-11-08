import React from 'react';
import {View, Text, Alert, TouchableNativeFeedback} from 'react-native';
import {Icon} from 'react-native-elements';
import {Control} from '../../styles';

/**
 * UI for control contents, basically a menu.
 */
const ControlMenu = (props: any) => {
  return (
    <View style={Control.Content.Wrapper}>
      <View style={Control.Content.Wrapper}>
        <TouchableNativeFeedback
          onPress={() => {
            props.setActiveChild(true);
            props.toggleMenu();
          }}>
          <View style={Control.Content.IconWrapper}>
            <Icon
              name="contacts"
              size={40}
              color={Control.Content.Icon.color}
            />
            <Text style={Control.Content.Description}>Contacts</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => {
            props.setActiveChild(false);
            props.toggleMenu();
          }}>
          <View style={Control.Content.IconWrapper}>
            <Icon name="message" size={40} color={Control.Content.Icon.color} />
            <Text style={Control.Content.Description}>Messages</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={() => Alert.alert('pressed')}>
          <View style={Control.Content.IconWrapper}>
            <Icon
              name="settings"
              size={40}
              color={Control.Content.Icon.color}
            />
            <Text style={Control.Content.Description}>Settings</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <TouchableNativeFeedback onPress={() => Alert.alert('pressed')}>
        <View style={Control.Content.IconWrapper}>
          <Icon name="info" size={40} color={Control.Content.Icon.color} />
          <Text style={Control.Content.Description}>Info</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ControlMenu;
