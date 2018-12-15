// @flow

import { StyleSheet } from 'react-native';

import colors from 'constants/colors';
import standards from 'constants/standards';

export default StyleSheet.create({
  form: {
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    paddingTop: standards.offset,
    paddingHorizontal: standards.gutter,
  },
  input: {
    marginBottom: standards.margin,
    width: '100%',
  },
  terms: {
    flexDirection: 'row',
  },
  footer: {
    alignItems: 'center',
    marginTop: standards.marginLarge,
    marginBottom: standards.offset,
  },
});
