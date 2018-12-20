// @flow

import { StyleSheet } from 'react-native';

import colors from 'constants/colors';
import standards from 'constants/standards';

export default StyleSheet.create({
  form: {
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    paddingHorizontal: standards.padding,
    paddingBottom: standards.paddingLarge,
    paddingTop: standards.padding,
    // paddingVertical: standards.paddingLarge,
  },
  inputs: {
    flexDirection: 'row',
    marginBottom: standards.marginSmall,
  },
  input3: {
    width: 85,
  },
  input4: {
    width: 95,
  },
  error: {
    justifyContent: 'center',
    marginBottom: standards.marginMedium,
  },
  back: {
    width: '100%',
    alignItems: 'flex-end',
  },
  backButton: {
    width: 30,
    height: 30,
    tintColor: colors.white,
  },
});
