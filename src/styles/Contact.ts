import {StyleSheet} from 'react-native';
import Colors from './Colors';

export const ContactPreview = StyleSheet.create({
  Image: {
    width: 100,
    height: 100,
  },

  Wrapper: {
    backgroundColor: Colors.mint,
    flex: 1,
  },

  Content: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },

  HeaderText: {
    fontSize: 50,
    color: Colors.cyan,
    alignSelf: 'center',
  },

  BodyText: {
    fontSize: 15,
    color: Colors.darkblue,
  },

  Icon: {
    color: Colors.cyan,
  },
});
