import {StyleSheet} from 'react-native';
import Colors from './Colors';
import {colors} from 'react-native-elements';

/**
 * Styling for control bar contents
 */
export const Content = StyleSheet.create({
  Wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.darkblue,
    // borderWidth: 1,
  },

  Icon: {
    color: Colors.cyan,
  },

  Description: {
    color: Colors.cyan,
    fontSize: 20,
    alignSelf: 'center',
  },

  IconWrapper: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'flex-start',
  },

  ChatInput: {
    color: Colors.darkblue,
    flexWrap: 'wrap',
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
    backgroundColor: Colors.darkblue,
  },

  Wrapper2: {
    height: 40,
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.darkblue,
  },

  Icon: {
    color: Colors.cyan,
    backgroundColor: Colors.darkblue,
  },

  IconWrapper: {
    backgroundColor: Colors.darkblue,
    color: Colors.darkblue,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  HeaderText: {
    fontSize: 25,
    color: Colors.cyan,
    alignSelf: 'center',
  },

  ChatInput: {
    color: Colors.darkblue,
    flexWrap: 'wrap',
  },

  Input: {
    flexWrap: 'wrap',
    backgroundColor: Colors.snow,
  },

  ControlInput: {
    flexWrap: 'wrap',
    backgroundColor: Colors.snow,
    minWidth: 400,
    width: 200,
  },
});

/**
 * Styling for control FAB
 */
export const Fab = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.cyan,
  },
});
