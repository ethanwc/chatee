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
  let joinedChats: any[] = [];
  let unjoinedChats: any[] = [];
  let search = props.search.toString().toLowerCase();

  for (let chat of props.chats) {
    //some chats may have no messages defined
    let lastMessage = chat.lastMessage || '';
    let creator = chat.creator.toString().toLowerCase();
    if (lastMessage.includes(search) || creator.includes(search)) {
      if (chat.members.includes(props.user.email)) joinedChats.push(chat);
      else unjoinedChats.push(chat);
    }
  }

  let hasIncoming = props.user.chatRequests.length > 0;

  //ui to accept/decline chat invites
  let requestView = hasIncoming ? (
    <View style={{flex: 1}}>
      <Text style={Chats.ChatPreview.Wrapper}>Chat Requests</Text>
      <FlatList
        data={unjoinedChats}
        renderItem={({item}: any) => (
          <ChatRequestView
            user={props.user}
            users={props.users}
            getUsers={props.getUsers}
            navigation={props.navigation}
            chat={item}
            id={item._id}
            key={item._id}
            getChats={props.getChats}
            handleChatInvite={props.handleChatInvite}
          />
        )}
      />
    </View>
  ) : null;

  return (
    <View style={Chats.Chats.Wrapper}>
      {requestView}
      <View style={{flex: 3}}>
        <FlatList
          data={joinedChats}
          renderItem={({item}: any) => (
            <ChatView
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
          )}
        />
      </View>
    </View>
  );
};

export default ChatsView;
