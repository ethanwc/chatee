import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {Control} from '../../styles';

/**
 * UI for message bar in the conversation view
 */
const ContentBar = (props: any) => {
  let bar = props.showContent ? (
    <View style={Control.Bar.Wrapper}>
      <View style={{flex: 1}}>
        <View style={Control.Bar.IconWrapper}>
          <Icon
            name="remove"
            size={40}
            color={Control.Bar.Icon.color}
            onPress={() => props.setShowContent(!props.showContent)}
          />
        </View>
      </View>

      <View style={{flex: 6}}>
        <TextInput
          multiline={true}
          placeholder="CONTENT MENU IN PROGRESS"
          placeholderTextColor={Control.Bar.ChatInput.color}
          style={Control.Bar.Input}
        />
      </View>
      <View style={{flex: 1}}>
        <Icon name="map" size={40} color={Control.Bar.Icon.color} />
      </View>
    </View>
  ) : null;

  return bar;
};

export default ContentBar;
