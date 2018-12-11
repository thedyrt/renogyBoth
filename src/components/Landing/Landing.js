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
                fontWeight="semiBold"
                fontSize="h2"
                fontSpacing="large"
              >
                ENTER TO WIN
              </Text>
              <Text
                fontFamily="dosis"
                fontSize="h1"
                fontWeight="semiBold"
                fontSpacing="large"
              >
                $6,000 SOLAR GIVEAWAY
              </Text>
              <Text
                fontSize="h3"
                fontSpacing="medium"
                fontAlignment="center"
              >
                Every month for 12 months, Renogy is giving away a $500 Renogy gift card to one luck winner.
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
