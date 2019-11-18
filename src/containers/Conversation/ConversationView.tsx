import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {Conversation} from '../../styles';

const ConversationView = (props: any) => {
  let image = props.message.type === 'image';

  let content = image ? (
    <Image
      source={{uri: props.message.message}}
      style={{width: 300, height: 300}}
    />
  ) : (
    <Text style={{flexWrap: 'wrap'}}>{props.message.message}</Text>
  );

  let imglocation =
    props.message.picture && props.message.picture === 'unset'
      ? require('../../assets/logo.png')
      : {uri: props.message.picture};

  return (
    <View style={Conversation.Conversation.Wrapper}>
      <View style={Conversation.Conversation.Content}>
        <Image
          style={Conversation.Conversation.ContactImage}
          source={imglocation}
        />
        <View style={Conversation.Conversation.MessageWrapper}>
          <View style={{flexDirection: 'row'}}>
            <Text style={Conversation.Conversation.HeaderText}>
              {props.message.author}
            </Text>
            <Text style={Conversation.Conversation.TimeText}>
              {props.message.editDate}
            </Text>
          </View>
          {content}
        </View>
      </View>
    </View>
  );
};

export default ConversationView;
