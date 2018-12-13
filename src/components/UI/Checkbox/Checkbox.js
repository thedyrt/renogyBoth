// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import {
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { boundMethod } from 'autobind-decorator';

import styles from './Checkbox.css.js';

type Props = {
  checked: boolean,
  children: Node,
  id: string,
  validations: ValidationMessages,
  showValidations?: boolean,
  toggleChecked: (id: string) => void,
};

export class Checkbox extends PureComponent<Props> {
  static defaultProps = {
    validations: [],
    showValidations: false,
  };

  @boundMethod
  onSelect() {
    const {
      toggleChecked,
      id,
    } = this.props;

    toggleChecked(id);
  }


  render() {
    const {
      checked,
      children,
      showValidations,
      validations,
    } = this.props;

    console.log(this.props.id, checked);

    const validation = validations[0];

    return (
      <TouchableOpacity
        onPress={this.onSelect}
        activeOpacity={1}
        style={styles.container}
      >
        <View
          style={[
            styles.iconContainer,
            validation && showValidations && styles.iconContainerError,
          ]}
        >
          {checked && (
            <Image
              source={{ uri: 'check' }}
              style={styles.check}
              resizeMode="contain"
            />
          )}
        </View>
        {children}
      </TouchableOpacity>
    );
  }
}
