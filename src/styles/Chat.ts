import {StyleSheet} from 'react-native';
import Colors from './Colors';
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
