import React from 'react';
import {View, TextInput} from 'react-native';

const Chat = () => {
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
        }}></View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',

          backgroundColor: 'orange',
        }}>
        <View style={{}}>
          <TextInput
            multiline={true}
            style={{height: 40}}
            placeholder="Enter a message."
          />
        </View>
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

export default Chat;
