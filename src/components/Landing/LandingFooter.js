// @flow

import React, { PureComponent } from 'react';
import {
  View,
  Image,
} from 'react-native';

import styles from './LandingFooter.css.js';

export default class LandingFooter extends PureComponent<Props, State> {
  render() {
    return (
      // <View
      //   style={styles.container}
      // >
        <Image
          source={{ uri: 'footer'}}
          style={styles.image}
        />
      // </View>
    );
  }
}
