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
  forceValidations: boolean,
  id: string,
  isInvalid: boolean,
  shouldResetState: boolean,
  toggleChecked: (id: string) => void,
};

type State = {
  showValidations: boolean,
};

export class Checkbox extends PureComponent<Props, State> {
  state = {
    showValidations: false,
  };

  componentDidUpdate(prevProps: Props) {
    if (this.props.shouldResetState && !prevProps.shouldResetState) {
      this.setState({ showValidations: false });
    }
  }

  @boundMethod
  onSelect() {
    const {
      toggleChecked,
      id,
    } = this.props;
    const {
      showValidations,
    } = this.state;

    toggleChecked(id);

    if (!showValidations) {
      this.setState({
        showValidations: true,
      });
    }
  }


  render() {
    const {
      checked,
      children,
      isInvalid,
      forceValidations,
    } = this.props;
    const {
      showValidations,
    } = this.state;

    return (
      <TouchableOpacity
        onPress={this.onSelect}
        activeOpacity={1}
        style={styles.container}
      >
        <View
          style={[
            styles.iconContainer,
            isInvalid && (showValidations || forceValidations) && styles.iconContainerError,
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
