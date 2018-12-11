// @flow

import { StyleSheet } from 'react-native';

import colors from 'constants/colors';
import standards from 'constants/standards';

const styles = StyleSheet.create({
  /*
  * FONT ALIGNMENT
  */
  leftAlign: {
    textAlign: 'left',
  },
  rightAlign: {
    textAlign: 'right',
  },
  centerAlign: {
    textAlign: 'center',
  },
  /*
  * FONT COLOR
  */
  grayLightest: {
    color: colors.grayLightest,
  },
  gold: {
    color: colors.gold,
  },
 
  /*
  * FONT SIZE
  */
  h1: {
    fontSize: 50,
  },
  h2: {
    fontSize: 40,
  },
  h3: {
    fontSize: 24,
  },
  body: {
    fontSize: 20,
  },
  h5: {
    fontSize: 12,
  },

  /*
  * FONT WEIGHT
  */
  semiBold: {
    fontWeight: '600',
  },
  normal: {
    fontWeight: 'normal',
  },
  /*
  * FONT VERTICAL SPACE
  */
  largeSpacing: {
    paddingBottom: standards.paddingLarge,
  },
  mediumSpacing: {
    paddingBottom: standards.paddingMedium,
  },
  smallSpacing: {
    paddingBottom: standards.padding,
  },

  /*
  * FONT TYPE
  */
  dosis: {
    fontFamily: 'Dosis-Regular',
  },
});

export default styles;
