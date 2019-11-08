import React, {useState} from 'react';
import Chats from '../Chats/Chats';
import ControlBar from '../../containers/Control/ControlBar';
import ControlMenu from '../../containers/Control/ControlMenu';
import {View, Alert} from 'react-native';
import Contacts from '../Contacts/Contacts';

/**
 * Holds various components inside the menu
 */
const Holder = (props: any) => {
  //show menu if true
  const [showMenu, setShowMenu] = useState(false);
  //active child is either chats(false) or contacts(true)
  const [activeChild, setActiveChild] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const chats = (
    <Chats
      toggleMenu={toggleMenu}
      showMenu={showMenu}
      navigation={props.navigation}
    />
  );

  const contacts = (
    <Contacts
      toggleMenu={toggleMenu}
      showMenu={showMenu}
      navigation={props.navigation}
    />
  );

  const child = activeChild ? contacts : chats;

  const controlbar = (
    <ControlBar
      navigation={props.navigation}
      toggleMenu={toggleMenu}
      isMain={true}
    />
  );

  const controlmenu = (
    <ControlMenu
      navigation={props.navigation}
      toggleMenu={toggleMenu}
      setActiveChild={setActiveChild}
    />
  );

  const hiddenMenu = <View style={{flex: 1}}>{child}</View>;

  const shownMenu = (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        {controlbar}
        {controlmenu}
      </View>
      <View style={{flex: 2}}>{child}</View>
    </View>
  );

  const render = showMenu ? shownMenu : hiddenMenu;

  return render;
};

export default Holder;
