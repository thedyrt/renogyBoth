// @flow

import { StyleSheet } from 'react-native';

import colors from 'constants/colors';
import standards from 'constants/standards';

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
    marginHorizontal: standards.gutter,
    marginTop: standards.offsetTop,
  },
  form: {
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    paddingTop: standards.offsetTop,
    paddingHorizontal: standards.gutter,
  },
  footer: {
    flex: 1,
  },
});
