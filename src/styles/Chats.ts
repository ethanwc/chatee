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
 * Styling for control bars (top and bottom)
 */
export const Bar = StyleSheet.create({
  Wrapper: {
    height: 40,
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.mint,
    borderWidth: 1,
  },

  Icon: {
    color: Colors.cyan,
  },

  IconWrapper: {
    alignSelf: 'center',
  },

  ChatInput: {
    color: Colors.darkblue,
    flexWrap: 'wrap',
  },
});

/**
 * Styling for the chats list
 */
export const Chats = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: Colors.mint,
  },
});
