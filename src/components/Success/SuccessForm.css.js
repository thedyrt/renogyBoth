// @flow

import { StyleSheet } from 'react-native';

import colors from 'constants/colors';
import standards from 'constants/standards';

export default StyleSheet.create({
  form: {
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    paddingHorizontal: standards.paddingLarge,
    paddingVertical: standards.paddingLarge,
  },
  inputs: {
    flexDirection: 'row',
  },
  input3: {
    width: 80,
  },
  input4: {
    width: 90,
  },
});
