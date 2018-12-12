// @flow

import { StyleSheet } from 'react-native';

import standards from 'constants/standards';
import colors from 'constants/colors';

export default StyleSheet.create({
  container: {
    padding: standards.padding,
    borderRadius: standards.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gold: {
    backgroundColor: colors.gold,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
});
