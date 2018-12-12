// @flow

import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import {
  Button,
  Checkbox,
  Text,
  TextInput,
} from 'UI';

import styles from './LandingForm.css.js';

type Props = {
  onSubmit: ({ email: string, acceptEmail: boolean }) => void,
  toggleViewTerms: () => void,
  email?: string,
  validationObject: Object,
  acceptTerms: true | void,
  acceptEmail: true | void,
  forceValidations: boolean,
  updateEmail: (email: string) => void,
  acceptCondition: (id: 'acceptTerms' | 'acceptEmail') => void,
  onSubmit: () => void,
};

export default class Landing extends PureComponent<Props> {
  render() {
    const {
      email,
      validationObject = {},
      acceptTerms,
      acceptEmail,
      forceValidations,
      toggleViewTerms,
      onSubmit,
      updateEmail,
      acceptCondition,
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
          Every month for 12 months, Renogy is giving away a $500 Renogy gift card to one luck winner.
        </Text>
        <View style={styles.input}>
          <TextInput
            forceValidations={forceValidations}
            keyboardType="email-address"
            onChangeText={updateEmail}
            placeholder="Enter Email"
            showValidationMessage
            vale={email}
            validations={validationObject.email}
          />
        </View>
        <Checkbox
          checked={!!acceptTerms}
          id="acceptTerms"
          toggleChecked={acceptCondition}
          isInvalid={!!validationObject.acceptTerms}
        >
          <View style={styles.terms}>
            <Text
              fontSize="h5"
            >
              I have read and accepted the &nbsp;
            </Text>
            <TouchableOpacity
              onPress={toggleViewTerms}
              activeOpacity={1}
            >
              <Text
                fontSize="h5"
                fontColor="gold"
              >
                terms and conditions
              </Text>
            </TouchableOpacity>
          </View>
        </Checkbox>
        <Checkbox
          checked={!!acceptEmail}
          id="acceptEmail"
          toggleChecked={acceptCondition}
        >
          <Text
            fontSize="h5"
            fontAlignment="left"
          >
            I agree to recieve info via email about future giveaways and promotions from Renogy and The Dyrt.
          </Text>
        </Checkbox>
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
