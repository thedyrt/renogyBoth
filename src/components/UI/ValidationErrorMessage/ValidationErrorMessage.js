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
  validations?: string[],
  shouldShowMessage: boolean,
};
export class ValidationErrorMessage extends PureComponent<Props> {
  static defaultProps = {
    shouldShowMessage: true,
  };

  render() {
    const {
      validations = [],
      shouldShowMessage,
    } = this.props;

    const message = validations[0];

    return (
      <View style={styles.error}>
        {message && shouldShowMessage && (
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
