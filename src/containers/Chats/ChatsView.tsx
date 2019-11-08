import React from 'react';
import {View, Text} from 'react-native';
import ChatView from './ChatView';
import {FlatList} from 'react-native-gesture-handler';
import {Chats} from '../../styles';

/**
 * UI wrapper for all chats
 */
const ChatsView = (props: any) => {
  return (
    //todo: map all chats...
    //todo: search feature

    <View style={Chats.Chats.Wrapper}>
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
        renderItem={({item}) => (
          <ChatView test={item.key} navigation={props.navigation} />
        )}
      />
    </View>
  );
};

export default ChatsView;
