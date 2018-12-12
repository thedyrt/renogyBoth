// @flow

import { StyleSheet } from 'react-native';

import standards from 'constants/standards';
import colors from 'constants/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: standards.padding,
    backgroundColor: colors.primaryMuted,
    flex: 1,
    paddingTop: 40,
  },
  scroll: {
    flex: 1,
    paddingTop: standards.paddingLarge,
    backgroundColor: colors.primaryMuted,
  },
  scrollContainer: {
    paddingBottom: standards.offsetTop,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: standards.paddingMedium,
  },
});
