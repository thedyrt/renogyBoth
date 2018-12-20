// @flow

import { StyleSheet } from 'react-native';

import colors from 'constants/colors';
import standards from 'constants/standards';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    borderColor: colors.white,
    borderRadius: standards.borderRadius,
    borderWidth: standards.borderWidth,
    height: standards.checkboxDimension,
    justifyContent: 'center',
    width: standards.checkboxDimension,
    marginRight: standards.margin,
  },
  iconContainerError: {
    borderColor: colors.red,
  },
  check: {
    tintColor: colors.white,
    width: standards.checkboxDimension - 10,
    height: standards.checkboxDimension - 10,
  },
});
