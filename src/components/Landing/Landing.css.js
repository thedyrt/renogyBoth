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
    marginHorizontal: standards.gutter,
    marginTop: standards.offsetTop,
  },
  footer: {
    flex: 1,
  },
});
