// @flow

import React, { PureComponent } from 'react';
import {
  Image,
} from 'react-native';

import styles from './LandingFooter.css.js';

export default class LandingFooter extends PureComponent<{}> {
  render() {
    return (
      <Image
        source={{ uri: 'footer' }}
        style={styles.image}
        resizeMode="contain"
      />
    );
  }
}
