import React, {useState, useEffect} from 'react';
import Pushy from 'pushy-react-native';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Chats from './components/Chats/Chats';
import Contacts from './components/Contacts/Contacts';
import Conversation from './components/Conversation/Conversation';
import Profile from './components/Profile/Profile';
import Holder from './components/Holder/Holder';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Please place this code in App.js,
// After the import statements, and before the Component class

Pushy.setNotificationListener(async (data: any) => {
  // Print notification payload data
  console.log('Received notification: ' + JSON.stringify(data));

  // Notification title
  let notificationTitle = 'MyApp';

  // Attempt to extract the "message" property from the payload: {"message":"Hello World!"}
  let notificationText = data.message || 'Test notification';

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
});

const App = createAppContainer(AppNavigator);

// const App = () => {
//   const usingHermes =
//     typeof HermesInternal === 'object' && HermesInternal !== null;

//   const [input, setInput] = useState('');

//   const handleButton = () => {};

//   useEffect(() => {
//     //todo: modularize
//     Pushy.listen();
//     // Only necessary for Android
//     if (Platform.OS === 'android') {
//       // Check whether the user has granted the app the WRITE_EXTERNAL_STORAGE permission
//       PermissionsAndroid.check(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//       ).then(granted => {
//         if (!granted) {
//           // Request the WRITE_EXTERNAL_STORAGE permission so that the Pushy SDK will be able to persist the device token in the external storage
//           PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//           ).then(result => {
//             // User denied permission?
//             if (result !== PermissionsAndroid.RESULTS.GRANTED) {
//               // Possibly ask the user to grant the permission
//             }
//           });
//         }
//       });
//     }
//     // Register the device for push notifications
//     Pushy.register()
//       .then(async (deviceToken: any) => {
//         // Display an alert with device token
//         console.log('Pushy device token: ' + deviceToken);
//         // Send the token to your backend server via an HTTP GET request
//         //await fetch('https://your.api.hostname/register/device?token=' + deviceToken);
//         // Succeeded, optionally do something to alert the user
//       })
//       .catch((err: any) => {
//         // Handle registration errors
//         console.error(err);
//       });
//   }, []);

//   // const styles = StyleSheet.create(
//   //     fontFamily: 'PT Sans Narrow', 'sans-serif';

//   // });

//   return <Login />;
// };
//todo: https://pushy.me/docs/additional-platforms/react-native
//parse data, custom icon Pushy.setNotificationIcon('ic_notification');

export default App;
