import React, {useState, useEffect} from 'react';
var Pushy = require('pushy-react-native');

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
  Button,
  Platform,
  PermissionsAndroid,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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

const App = () => {
  const usingHermes =
    typeof HermesInternal === 'object' && HermesInternal !== null;

  const [input, setInput] = useState('');

  const handleButton = () => {};

  useEffect(() => {
    //todo: modularize
    Pushy.listen();
    // Only necessary for Android
    if (Platform.OS === 'android') {
      // Check whether the user has granted the app the WRITE_EXTERNAL_STORAGE permission
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ).then(granted => {
        if (!granted) {
          // Request the WRITE_EXTERNAL_STORAGE permission so that the Pushy SDK will be able to persist the device token in the external storage
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          ).then(result => {
            // User denied permission?
            if (result !== PermissionsAndroid.RESULTS.GRANTED) {
              // Possibly ask the user to grant the permission
            }
          });
        }
      });
    }

    // Register the device for push notifications
    Pushy.register()
      .then(async (deviceToken: any) => {
        // Display an alert with device token
        console.log('Pushy device token: ' + deviceToken);

        // Send the token to your backend server via an HTTP GET request
        //await fetch('https://your.api.hostname/register/device?token=' + deviceToken);

        // Succeeded, optionally do something to alert the user
      })
      .catch((err: any) => {
        // Handle registration errors
        console.error(err);
      });
  }, []);

  //todo: https://pushy.me/docs/additional-platforms/react-native
  //parse data, custom icon Pushy.setNotificationIcon('ic_notification');

  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: 'powderblue',
        }}
      />

      <View
        style={{
          flex: 17,
          flexDirection: 'row',
          backgroundColor: 'yellow',
        }}>
        <Text>{input}</Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',

          backgroundColor: 'orange',
        }}>
        <Button onPress={() => handleButton()} title="IMG" />

        <View style={{}}>
          <TextInput
            multiline={true}
            style={{height: 40}}
            placeholder="Enter a message."
            onChangeText={text => setInput(text)}
            value={input}
          />
        </View>

        <Button onPress={() => handleButton()} title="SND" />
      </View>
      {/* <View>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
