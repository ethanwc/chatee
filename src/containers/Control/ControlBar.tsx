import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import {Control} from '../../styles';
import {TextInput} from 'react-native-gesture-handler';

/**
 * UI for top control bar
 */
const Controlbar = (props: any) => {
  //hook to determine if currently searching
  const [isSearching, setIsSearching] = useState(false);
  let menu = null;

  if (!props.showMenu)
    menu = (
      <Icon
        onPress={() => props.toggleMenu()}
        name="menu"
        size={40}
        color={Control.Bar.Icon.color}
      />
    );

  if (props.goesBack)
    menu = (
      <Icon
        onPress={() => props.navigation.goBack()}
        name="arrow-back"
        size={40}
        color={Control.Bar.Icon.color}
      />
    );

  const search =
    !props.showMenu && !props.isMain && !isSearching ? (
      <View>
        <Icon
          onPress={() => setIsSearching(true)}
          name="search"
          size={40}
          color={Control.Bar.Icon.color}
        />
      </View>
    ) : null;

  const cancel = isSearching ? (
    <Icon
      onPress={() => {
        setIsSearching(false);
        props.setSearch('');
      }}
      name="cancel"
      size={40}
      color={Control.Bar.Icon.color}
    />
  ) : null;

  const searchbar = isSearching ? (
    <TextInput
      multiline={true}
      placeholder="Search for Something"
      placeholderTextColor={Control.Bar.ChatInput.color}
      style={Control.Bar.Input}
      value={props.search}
      onChangeText={text => props.setSearch(text)}
    />
  ) : null;

  const settings = props.settings ? (
    <Icon
      onPress={() => props.toggleSettings(true)}
      name="group-add"
      size={40}
      color={Control.Bar.Icon.color}
    />
  ) : null;

  return (
    <View style={Control.Bar.Wrapper}>
      {menu}
      <View style={{flex: 6}}>{searchbar}</View>
      <View style={{flexDirection: 'row'}}>
        {settings}
        {search}
        {cancel}
      </View>
    </View>
  );
};

export default Controlbar;
