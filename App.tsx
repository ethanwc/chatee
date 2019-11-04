/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const usingHermes =
    typeof HermesInternal === 'object' && HermesInternal !== null;

  const [input, setInput] = useState('');

  const handleButton = () => {};

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
