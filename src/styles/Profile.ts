import {StyleSheet} from 'react-native';
import Colors from './Colors';

/**
 * Styling for contact preview
 */
export const ProfileView = StyleSheet.create({
  Image: {
    width: 300,
    height: 300,
  },

  Wrapper1: {
    backgroundColor: Colors.mint,
    flex: 1,
  },

  Wrapper2: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.mint,
    // borderWidth: 1,
  },

  EditProfile: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.darkblue,
  },

  Content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 25,
    justifyContent: 'center'
  },

  HeaderText: {
    fontSize: 40,
    color: Colors.cyan,
    alignSelf: 'center',
  },

  BodyText: {
    fontSize: 25,
    color: Colors.darkblue,
    alignSelf: 'center',
  },

  Description: {
    fontSize: 20,
    color: Colors.mint,
  },

  EditBox: {
    fontSize: 35,
    color: Colors.cyan,
    backgroundColor: Colors.mint,
    alignSelf: 'stretch',
    textAlign: 'center',
    margin: 10,
  },

  Icon: {
    color: Colors.cyan,
  },
});
