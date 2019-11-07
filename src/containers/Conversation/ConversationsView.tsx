import React from 'react';
import {View, FlatList} from 'react-native';
import ConversationView from './ConversationView';
import {Chat} from '../../styles';

const ConversationsView = () => {
  return (
    <View style={Chat.Conversation.Wrapper}>
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
        renderItem={({item}) => <ConversationView test={item.key} />}
      />
    </View>
  );
};

export default ConversationsView;
