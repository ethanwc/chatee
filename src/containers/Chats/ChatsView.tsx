import React from 'react';
import {View, Text, Alert} from 'react-native';
import ChatView from './ChatView';
import {FlatList} from 'react-native-gesture-handler';
import {Chats} from '../../styles';
import ChatRequestView from './ChatRequestView';

/**
 * UI wrapper for all chats
 */
const ChatsView = (props: any) => {
  //only display chats the user is in as actual chats
  let filteredChats: any[] = [];
  let search = props.search.toString().toLowerCase();

  for (let chat of props.chats) {
    //some chats may have no messages defined
    let lastMessage = chat.lastMessage || '';
    let creator = chat.creator.toString().toLowerCase();
    chat.picture = props.users.find(
      (member: any) => member.email === chat.creator,
    ).profile.picture;
    if (lastMessage.includes(search) || creator.includes(search)) {
      if (chat.members.includes(props.user.email)) chat.new = false;
      else chat.new = true;
      filteredChats.push(chat);
    }
  }

  return (
    <View style={Chats.Chats.Wrapper}>
      <FlatList
        data={filteredChats}
        renderItem={({item}: any) =>
          item.new ? (
            <ChatRequestView
              picture={item.picture}
              user={props.user}
              users={props.users}
              getUsers={props.getUsers}
              navigation={props.navigation}
              chat={item}
              id={item._id}
              getChats={props.getChats}
              handleChatInvite={props.handleChatInvite}
            />
          ) : (
            <ChatView
              picture={item.picture}
              user={props.user}
              users={props.users}
              getUsers={props.getUsers}
              navigation={props.navigation}
              chat={item}
              id={item._id}
              key={item._id}
              getChats={props.getChats}
              leaveChat={props.leaveChat}
            />
          )
        }
      />
    </View>
  );
};

export default ChatsView;
