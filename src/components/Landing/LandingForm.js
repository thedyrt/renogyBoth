// @flow

import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import {
  Button,
  Text,
} from 'UI';
import {
  WithValidations,
} from 'Wrappers';

import styles from './LandingForm.css.js';

type Props = {
  acceptCondition: (id: string) => void,
  acceptTerms: true | void,
  email?: string,
  onSubmit: () => void,
  toggleViewTerms: () => void,
  updateEmail: (email: string) => void,
};

const noOp = () => {};

export default class Landing extends PureComponent<Props> {
  render() {
    const {
      acceptCondition,
      acceptTerms,
      email,
      onSubmit,
      toggleViewTerms,
      updateEmail,
    } = this.props;

    return (

      <KeyboardAvoidingView
        style={styles.form}
        behavior="padding"
      >
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
          Every month for 12 months, Renogy is giving away a $500 Renogy gift card to one lucky winner.
        </Text>
        <View style={styles.input}>
          <WithValidations.TextInput
            id="email"
            keyboardType="email-address"
            onBlur={noOp}
            onChangeText={updateEmail}
            onSubmitEditing={onSubmit}
            placeholder="Enter Email"
            showValidationMessage
            value={email}
          />
          <WithValidations.ValidationErrorMessage
            id="email"
          />
        </View>
        <View style={styles.acceptTerms}>
          <WithValidations.Checkbox
            checked={!!acceptTerms}
            id="acceptTerms"
            toggleChecked={acceptCondition}
          >
            <Text
              fontSize="h5"
            >
              I have read and accepted the &nbsp;
            </Text>
          </WithValidations.Checkbox>
          <TouchableOpacity
            onPress={toggleViewTerms}
            activeOpacity={1}
            style={styles.viewConditions}
          >
            <Text
              fontSize="h5"
              fontColor="gold"
            >
              terms and conditions
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Button
            onPress={onSubmit}
            label="ENTER"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
