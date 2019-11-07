import React from 'react';
import {View, Text} from 'react-native';
import ChatView from './ChatView';
import {FlatList} from 'react-native-gesture-handler';

const ChatsView = () => {
  return (
    //todo: map all chats...
    //todo: search feature

    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
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
        renderItem={({item}) => <ChatView test={item.key}></ChatView>}
      />
    </View>
  );
};

export default ChatsView;