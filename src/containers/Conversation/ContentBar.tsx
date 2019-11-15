import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Control} from '../../styles';

/**
 * UI for message bar in the conversation view
 */
const ContentBar = (props: any) => {
  let bar = props.showContent ? (
    <View style={Control.Bar.Wrapper2}>
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

      <View style={{flex: 1}}>
        <View style={Control.Bar.IconWrapper}>
          <Icon
            name="camera"
            size={40}
            color={Control.Bar.Icon.color}
            onPress={() => props.takePhoto(props.chatid)}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <View style={Control.Bar.IconWrapper}>
          <Icon
            name="photo"
            size={40}
            color={Control.Bar.Icon.color}
            onPress={() => props.selectImage(props.chatid)}
          />
        </View>
      </View>

      <View style={{flex: 1}}>
        <Icon
          name="my-location"
          size={40}
          color={Control.Bar.Icon.color}
          onPress={() => props.getLocation()}
        />
      </View>
    </View>
  ) : null;

  return bar;
};

export default ContentBar;
