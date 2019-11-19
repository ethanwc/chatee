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
import Pushy from 'pushy-react-native';

// Please place this code in App.js,
// After the import statements, and before the Component class

Pushy.setNotificationListener(async (data: {message: string}) => {
  // Notification title
  let notificationTitle = 'Chatee';

  // Attempt to extract the "message" property from the payload: {"message":"Hello World!"}
  let notificationText = data.message || '';

  // Display basic system notification
  Pushy.notify(notificationTitle, notificationText);
});

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
