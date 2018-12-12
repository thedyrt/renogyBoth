// @flow

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const standards = {
  paddingSmall: 5,
  padding: 10,
  paddingMedium: 20,
  paddingLarge: 30,
  marginSmall: 5,
  margin: 10,
  marginMedium: 20,
  marginLarge: 30,
  gutter: 40,
  offsetTop: 70,
  borderRadius: 5,
  borderWidth: 2,
  checkboxDimension: 30,
  windowWidth,
  windowHeight,
};

export default standards;
