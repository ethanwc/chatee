import React, {useState, useEffect} from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Chats from './components/Chats/Chats';
import Contacts from './components/Contacts/Contacts';
import Conversation from './components/Conversation/Conversation';
import Profile from './components/Profile/Profile';
import Holder from './components/Holder/Holder';
import Info from './containers/Info/Info';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,

    navigationOptions: {
      header: null,
    },
  },

  Register: {
    screen: Register,

    navigationOptions: {
      header: null,
    },
  },

  Holder: {
    screen: Holder,

    navigationOptions: {
      header: null,
    },
  },

  Chats: {
    screen: Chats,

    navigationOptions: {
      header: null,
    },
  },

  Contacts: {
    screen: Contacts,

    navigationOptions: {
      header: null,
    },
  },

  Profile: {
    screen: Profile,

    navigationOptions: {
      header: null,
    },
  },

  Conversation: {
    screen: Conversation,

    navigationOptions: {
      header: null,
    },
  },

  Info: {
    screen: Info,

    navigationOptions: {
      header: null,
    },
  },
});

const App = createAppContainer(AppNavigator);

export default App;
