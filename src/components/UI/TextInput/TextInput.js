// @flow

import React, { PureComponent } from 'react';
import {
  TextInput as NativeTextInput,
  Keyboard,
  View,
} from 'react-native';
import { boundMethod } from 'autobind-decorator';

import {
  Text,
} from 'UI';

import styles from './TextInput.css.js';

type Props = {
  id: string,
  onChangeText: (value: string, id: string) => void,
  onSubmitEditing: () => void,
  placeholder?: string,
  validations?: string[],
  value: string,
  keyboardType: 'email-address' | 'numeric',
};

type State = {
  showValidations: boolean,
};

export class TextInput extends PureComponent<Props, State> {
  static defaultProps = {
    onChangeText: () => {},
    onSubmitEditing: () => {},
  };

  state = {};

  @boundMethod
  onChangeText(value: string) {
    const {
      onChangeText,
      id,
    } = this.props;

    onChangeText(value, id);
  }

  @boundMethod
  onSubmitEditing() {
    const {
      onSubmitEditing,
    } = this.props;

    Keyboard.dismiss();
    
    this.setState({
      showValidations: true,
    }, () => {
      onSubmitEditing();
    });
  }

  @boundMethod
  onBlur() {
    this.setState({ showValidations: true })
  }

  render() {
    const {
      keyboardType,
      placeholder,
      validations = [],
      value,
    } = this.props;
    const { showValidations } = this.state;
    const validation = validations[0];
    const error = showValidations && validations;

    return (
      <>
        <View style={[styles.container, error && styles.error]}>
          <NativeTextInput
            keyboardType={keyboardType}
            onBlur={this.onBlur}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEditing}
            placeholder={placeholder}
            returnKeyType="done"
            style={styles.input}
            value={value}
            enablesReturnKeyAutomatically={false}
          />
        </View>
        {error && (
          <Text
            fontColor="red"
            fontSpacing="medium"
          >
            {validation}
          </Text>
        )}
      </>
    );
  }
}
