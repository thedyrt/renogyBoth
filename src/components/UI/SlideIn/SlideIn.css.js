// @flow

import { StyleSheet } from 'react-native';

import standards from 'constants/standards';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    width: standards.windowWidth,
    height: standards.windowHeight,
  },
});
