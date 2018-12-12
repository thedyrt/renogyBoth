// @flow

import { StyleSheet } from 'react-native';

import colors from 'constants/colors';
import standards from 'constants/standards';

export default StyleSheet.create({
  form: {
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    paddingTop: standards.paddingLarge,
    paddingHorizontal: standards.gutter,
  },
  inputs: {
    flexDirection: 'row',
  },
  input: {
    // marginRight: standards.margin,
  },
  input3: {
    width: 72,
  },
  input4: {
    width: 81,
  },
  // input: {
  //   marginBottom: standards.marginMedium,
  //   width: '100%',
  // },
  // terms: {
  //   flexDirection: 'row',
  // },
  // footer: {
  //   alignItems: 'center',
  //   marginTop: standards.marginLarge,
  //   marginBottom: standards.offsetTop,
  // },
});
