import React from 'react';
import {View, Text, Alert} from 'react-native';
import ChatView from './ChatView';
import {FlatList} from 'react-native-gesture-handler';
import {Chats} from '../../styles';

/**
 * UI wrapper for all chats
 */
const ChatsView = (props: any) => {
  // for (let chat in props.chats) chats.push({key: chat});

  return (
    <View style={Chats.Chats.Wrapper}>
      <FlatList
        data={props.chats}
        renderItem={({item}: any) => (
          <ChatView
            user={props.user}
            users={props.users}
            getUsers={props.getUsers}
            navigation={props.navigation}
            chat={item}
            key={item._id}
            getChats={props.getChats}
          />
        )}
      />
    </View>
  );
};

export default ChatsView;
