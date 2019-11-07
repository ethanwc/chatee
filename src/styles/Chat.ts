import {StyleSheet} from 'react-native';
import Colors from './Colors';
/**
 * Styling for chat preview
 */
export const ChatPreview = StyleSheet.create({
  Wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },

  HeaderText: {
    fontSize: 40,
    color: Colors.snow,
  },

  BodyText: {
    fontSize: 20,
    color: Colors.snow,
  },
});

/**
 * Styling for a conversation
 */
export const Conversation = StyleSheet.create({
  Wrapper: {
    flex: 10,
    backgroundColor: Colors.mint,
  },
  Content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
