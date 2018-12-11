// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import {
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { boundMethod } from 'autobind-decorator';

import styles from './Checkbox.css.js'

type Props = {
  checked: boolean,
  children: Node,
  id: string,
  toggleChecked: (id: string) => void,
};

export class Checkbox extends PureComponent<Props> {
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
      toggleChecked,
    } = this.props;
    return (
      <TouchableOpacity
        onPress={this.onSelect}
        activeOpacity={1}
        style={styles.container}
      >
        <View style={styles.iconContainer}>
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
