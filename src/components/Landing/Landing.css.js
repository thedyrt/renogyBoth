// @flow

import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
  appContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colors.primary,
  },
  content: {
    flex: 1,
  },
  body: {
    flex: 4,
    backgroundColor: 'yellow',
  },
  form: {
    backgroundColor: colors.primaryMuted,
  },
  footer: {
    flex: 1,
  },
});
