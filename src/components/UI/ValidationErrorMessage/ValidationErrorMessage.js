// @flow

import React, { PureComponent } from 'react';
import {
  View,
} from 'react-native';

import {
  Text,
} from 'UI';

import styles from './ValidationErrorMessage.css.js';

type Props = {
  validations: ValidationMessages,
  showValidations: boolean,
};
export class ValidationErrorMessage extends PureComponent<Props> {
  static defaultProps = {
    showValidations: false,
    validations: [],
  };

  render() {
    const {
      showValidations,
      validations,
    } = this.props;

    const message = validations[0];

    return (
      <View style={styles.error}>
        {message && showValidations && (
          <Text
            fontColor="red"
          >
            {message}
          </Text>
        )}
      </View>
    );
  }
}
