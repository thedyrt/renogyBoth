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
  backgroundColor: 'gold' | 'transparent',
  label: string,
  onPress: () => void,
};

export class Button extends PureComponent<Props> {
  static defaultProps = {
    onPress: () => {},
    backgroundColor: 'gold',
  };

  render() {
    const {
      backgroundColor,
      label,
      onPress,
    } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        style={[
          styles.container,
          styles[backgroundColor],
        ]}
      >
        <Text
          fontSize="h3"
          fontColor="white"
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
}
