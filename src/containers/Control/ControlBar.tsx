import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import {Control} from '../../styles';
import {TextInput} from 'react-native-paper';

/**
 * UI for top control bar
 */
const Controlbar = (props: any) => {
  //hook to determine if currently searching
  const [isSearching, setIsSearching] = useState(false);
  const menu = !props.showMenu ? (
    <Icon
      onPress={() => props.toggleMenu()}
      name="menu"
      size={40}
      color={Control.Bar.Icon.color}
    />
  ) : null;

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
      style={{width: 200}}
      value={props.search}
      onChangeText={text => props.setSearch(text)}
    />
  ) : null;

  return (
    <View style={Control.Bar.Wrapper}>
      {menu}
      {search}
      {searchbar}
      {cancel}
    </View>
  );
};

export default Controlbar;
