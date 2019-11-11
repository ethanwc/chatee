import React from 'react';
import ContactView from './ContactView';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Contact} from '../../styles';

const SearchContactView = (props: any) => {
  return (
    <TouchableWithoutFeedback
      style={Contact.ContactPreview.Content}
      onPress={() =>
        props.navigation.navigate('Profile', {
          userinfo: props.email,
        })
      }>
      <View style={{flexDirection: 'row'}}>
        <ContactView
          navigation={props.navigation}
          name={props.name}
          email={props.email}
        />
        <View style={{flexDirection: 'column'}}>
          <Icon
            onPress={() =>
              props.friendResponse({
                potentialFriend: props.email,
                accept: true,
              })
            }
            name="done"
            size={40}
            color={Contact.ContactPreview.Icon.color}
          />
          <Icon
            onPress={() =>
              props.friendResponse({
                potentialFriend: props.email,
                accept: false,
              })
            }
            name="clear"
            size={40}
            color={Contact.ContactPreview.Icon.color}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchContactView;
