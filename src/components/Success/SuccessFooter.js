// @flow

import React, { PureComponent } from 'react';
import {
  View,
  Image,
} from 'react-native';

import styles from './SuccessFooter.css.js';

export default class Landing extends PureComponent<Props, State> {
  render() {
    return (
      <View
        style={styles.container}
      >
        <Image
          source={{ uri: 'map' }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    );
  }
}
