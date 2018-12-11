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
    fontSize: 30,
  },
  h2: {
    fontSize: 44,
  },
  h3: {
    fontSize: 20,
  },
  body: {
    fontSize: 14,
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
    paddingBottom: standards.padding,
  },
  smallSpacing: {
    paddingBottom: standards.paddingSmall,
  },

  /*
  * FONT TYPE
  */
  dosis: {
    fontFamily: 'Dosis-Regular',
  },
});

export default styles;
