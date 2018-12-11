// @flow

import React, { PureComponent } from 'react';
import {
  View,
} from 'react-native';
import { boundMethod } from 'autobind-decorator';
import validate from 'validate.js';

import { emailValidations } from 'constants/validations';

import {
  BackgroundImage,
  Text,
  TextInput,
} from 'UI';

import styles from './Landing.css.js';

type Props = {};
type State = {
  email?: string,
  validations?: string[],
};

export default class Landing extends PureComponent<Props, State> {
  state = {};

  @boundMethod
  updateEmail(email: string) {
    const { email: validations } = validate({ email }, emailValidations) || {};

    this.setState({
      email,
      validations,
    });
  }

  render() {
    const {
      email,
      validations,
    } = this.state;

    return (
      <View style={styles.appContainer}>
        <BackgroundImage uri="background" />
        <View style={styles.content}>
          <View style={styles.body}>
            <View style={styles.form}>
              <Text
                fontFamily="dosis"
                fontSize="h2"
                fontSpacing="large"
                fontWeight="semiBold"
              >
                ENTER TO WIN
              </Text>
              <Text
                fontFamily="dosis"
                fontSize="h1"
                fontSpacing="large"
                fontWeight="semiBold"
              >
                $6,000 SOLAR GIVEAWAY
              </Text>
              <Text
                fontAlignment="center"
                fontSize="h3"
                fontSpacing="medium"

              >
                Every month for 12 months, Renogy is giving away a $500 Renogy gift card to one luck winner.
              </Text>
              <TextInput
                onChangeText={this.updateEmail}
                placeholder="Enter Email"
                vale={email}
                validations={validations}
                keyboardType="email-address"
              />
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
