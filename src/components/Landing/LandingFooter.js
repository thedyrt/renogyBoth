// @flow

import React, { PureComponent } from 'react';
import {
  Image,
} from 'react-native';

import styles from './LandingFooter.css.js';

export default class LandingFooter extends PureComponent<Props, State> {
  render() {
    return (
      <Image
        source={{ uri: 'footer'}}
        style={styles.image}
      />
    );
  }
}
