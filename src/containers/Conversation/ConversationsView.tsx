import React from 'react';
import {FlatList, View} from 'react-native';
import ConversationView from './ConversationView';
import {Chat} from '../../styles';

/**
 * UI wrapper for each message in selected conversation
 */
const ConversationsView = () => {
  return (
    <View style={Chat.Conversation.Wrapper}>
      <FlatList
        data={[{key: 'Devin'}, {key: 'Dan'}]}
        renderItem={({item}) => <ConversationView test={item.key} />}
      />
    </View>
  );
};

export default ConversationsView;
