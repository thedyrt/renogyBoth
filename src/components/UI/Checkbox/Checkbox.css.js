// @flow

import { StyleSheet } from 'react-native';

import colors from 'constants/colors';
import standards from 'constants/standards';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: standards.margin,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
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
  check: {
    tintColor: colors.white,
    width: standards.checkboxDimension - 10,
    height: standards.checkboxDimension - 10,
  },
});
