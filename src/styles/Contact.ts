import {StyleSheet} from 'react-native';

export const ContactPreview = StyleSheet.create({
  Image: {
    width: 75,
    height: 75,
  },

  Wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },

  HeaderText: {
    fontSize: 40,
    color: 'blue',
  },

  BodyText: {
    fontSize: 20,
    color: 'blue',
  },
});
