import React from 'react';
import {FlatList, View} from 'react-native';
import ConversationView from './ConversationView';
import {Conversation} from '../../styles';

/**
 * UI wrapper for each message in selected conversation
 */
const ConversationsView = (props: any) => {
  //filter messages from search
  let search = props.search.toString().toLowerCase();
  let filteredMessages: any[] = [];
  //determine photo for specific user
  for (let message of props.messages)
    if (
      message.message
        .toString()
        .toLowerCase()
        .includes(search)
    ) {
      message.picture = props.members.find(
        (member: any) => member.email === message.author,
      ).picture;
      filteredMessages.push(message);
    }
  return (
    <View style={Conversation.Conversation.Wrapper}>
      <FlatList
        data={filteredMessages}
        inverted={true}
        renderItem={({item}: any) => (
          <ConversationView message={item} key={item._id} />
        )}
      />
    </View>
  );
};

export default ConversationsView;
