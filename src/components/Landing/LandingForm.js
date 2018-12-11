// @flow

import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import { boundMethod } from 'autobind-decorator';
import validate from 'validate.js';

import { emailValidations } from 'constants/validations';

import {
  Text,
  TextInput,
  Checkbox,
} from 'UI';

import styles from './LandingForm.css.js';

type Props = {
  onSubmit: ({ email: string, acceptEmail: boolean }) => void,
  toggleViewTerms: () => void,
};

type State = {
  email?: string,
  validations?: string[],
  acceptTerms: boolean,
  acceptEmail: boolean,
};

export default class Landing extends PureComponent<Props, State> {
  state = {
    acceptTerms: false,
    acceptEmail: true,
    email: '',
  };

  @boundMethod
  updateEmail(email: string) {
    const { email: validations } = validate({ email }, emailValidations) || {};

    this.setState({
      email,
      validations,
    });
  }

  @boundMethod
  acceptCondition(id: 'acceptTerms' | 'acceptEmail') {
    this.setState((prevState: State) => ({
      [id]: !prevState[id],
    }));
  }

  render() {
    const {
      email,
      validations,
      acceptTerms,
      acceptEmail,
    } = this.state;
    const {
      toggleViewTerms,
    } = this.props;

    return (
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
        <View style={styles.input}>
          <TextInput
            onChangeText={this.updateEmail}
            placeholder="Enter Email"
            vale={email}
            validations={validations}
            keyboardType="email-address"
          />
        </View>
        <Checkbox
          checked={acceptTerms}
          id="acceptTerms"
          toggleChecked={this.acceptCondition}
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
          checked={acceptEmail}
          id="acceptEmail"
          toggleChecked={this.acceptCondition}
        >
          <Text
            fontSize="h5"
            fontAlignment="left"
          >
            I agree to recieve info via email about future giveaways and promotions from Renogy and The Dyrt.
          </Text>
        </Checkbox>
      </View>
    );
  }
}
