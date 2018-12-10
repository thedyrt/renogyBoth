// @flow

import React, { PureComponent } from 'react';
import {
  View,
} from 'react-native';

import {
  BackgroundImage,
  Text,
} from 'UI';

import styles from './Landing.css.js';

type Props = {};

export default class Landing extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.appContainer}>
        <BackgroundImage uri="background" />
        <View style={styles.content}>
          <View style={styles.body}>
            <View style={styles.form}>
              <Text
                fontFamily="dosis"
                fontSize="h2"
              >
                ENTER TO WIN
              </Text>
            </View>
          </View>
          <View style={styles.footer}>
            <BackgroundImage uri="footer" />
          </View>
        </View>
      </View>
    );
  }
}
