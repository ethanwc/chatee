import {StyleSheet} from 'react-native';
import Colors from './Colors';

/**
 * Styling for a conversation
 */
export const Conversation = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: Colors.mint,
  },

  Content: {
    flexDirection: 'row',
    margin: 5,
  },

  ContactImage: {
    width: 50,
    height: 50,
    alignSelf: 'flex-start',
    margin: 5,
  },

  MessageWrapper: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
  },

  HeaderText: {
    fontSize: 15,
    color: Colors.cyan,
  },

  BodyText: {
    fontSize: 15,
    color: Colors.darkblue,
  },

  TimeText: {
    fontSize: 15,
    color: Colors.cyan,
  },
});
