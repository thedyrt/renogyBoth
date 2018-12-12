// @flow

import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
} from 'react-native';

import {
  Text,
} from 'UI';

import styles from './Button.css.js';

type Props = {
  label: string,
  onPress: () => void,
};

export class Button extends PureComponent<Props> {
  static defaultProps = {
    onPress: () => {},
  };

  render() {
    const {
      onPress,
      label,
    } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        style={styles.container}
      >
        <Text
          fontSize="h3"
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
}
