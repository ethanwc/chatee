import React from 'react';
import {FlatList, View} from 'react-native';
import ConversationView from './ConversationView';
import {Conversation} from '../../styles';

/**
 * UI wrapper for each message in selected conversation
 */
const ConversationsView = (props: any) => {
  return (
    <View style={Conversation.Conversation.Wrapper}>
      <FlatList
        data={props.messages}
        renderItem={({item}: any) => (
          <ConversationView message={item} key={item._id} />
        )}
      />
    </View>
  );
};

export default ConversationsView;
