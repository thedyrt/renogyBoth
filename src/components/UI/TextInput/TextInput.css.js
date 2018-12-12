// @flow

import { StyleSheet } from 'react-native';

import standards from 'constants/standards';
import colors from 'constants/colors';

export default StyleSheet.create({
  container: {
    borderRadius: standards.borderRadius,
    backgroundColor: colors.grayLightest,
    width: '100%',
    padding: standards.padding,
  },
  errorContainer: {
    borderWidth: standards.borderWidth,
    borderColor: colors.red,
  },
  input: {
    padding: standards.padding,
    fontSize: 20,
  },
  error: {
    height: 25,
    marginTop: standards.marginSmall,
  },
});
