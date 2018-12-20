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
    width: '100%',
  },
  footer: {
    alignItems: 'center',
    marginVertical: standards.marginLarge,
  },
  acceptTerms: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: standards.margin,
  },
  viewConditions: {
    justifyContent: 'center',
  },
});
