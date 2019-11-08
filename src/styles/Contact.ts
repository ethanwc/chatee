import {StyleSheet} from 'react-native';
import Colors from './Colors';

/**
 * Styling for contact preview
 */
export const ContactPreview = StyleSheet.create({
  Image: {
    width: 60,
    height: 60,
    marginRight: 5,
  },

  Wrapper: {
    backgroundColor: Colors.mint,
    flex: 1,
  },

  Content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 5,
  },

  HeaderText: {
    fontSize: 40,
    color: Colors.cyan,
    alignSelf: 'flex-start',
  },

  BodyText: {
    fontSize: 15,
    color: Colors.darkblue,
  },

  Icon: {
    color: Colors.cyan,
  },
});
