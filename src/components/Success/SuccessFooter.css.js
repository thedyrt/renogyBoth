// @flow

import { StyleSheet } from 'react-native';

import standards from 'constants/standards';

export default StyleSheet.create({
  container: {
    width: standards.windowWidth,
    height: standards.windowHeight / 2,
    paddingHorizontal: standards.paddingLarge,
    paddingBottom: standards.offsetTop,
  },
  image: {
    width: undefined,
    height: undefined,
    flex: 1,
  },
});
