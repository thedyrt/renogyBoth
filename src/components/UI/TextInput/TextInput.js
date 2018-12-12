// @flow

import React, { PureComponent } from 'react';
import {
  TextInput as NativeTextInput,
  View,
} from 'react-native';
import { boundMethod } from 'autobind-decorator';

import {
  Text,
} from 'UI';

import styles from './TextInput.css.js';

type Props = {
  autoFocus?: boolean,
  forceValidations: boolean,
  id: string,
  inputRef?: any,
  keyboardType: 'email-address' | 'numeric',
  maxLength?: number,
  onChangeText: (value: string, id: string) => void,
  onSubmitEditing: (id: string) => void,
  placeholder?: string,
  returnKeyType: 'done' | 'next',
  validations?: string[],
  value: string,
};

type State = {
  showValidations: boolean,
};

export class TextInput extends PureComponent<Props, State> {
  static defaultProps = {
    onChangeText: () => {},
    onSubmitEditing: () => {},
    returnKeyType: 'done',
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
      id,
    } = this.props;
    
    this.setState({
      showValidations: true,
    }, () => {
      onSubmitEditing(id);
    });
  }

  @boundMethod
  onBlur() {
    this.setState({ showValidations: true });
  }

  render() {
    const {
      autoFocus,
      forceValidations,
      inputRef,
      keyboardType,
      maxLength,
      placeholder,
      returnKeyType,
      validations = [],
      value,
    } = this.props;
    const { showValidations } = this.state;
    const validation = validations[0];
    const error = (showValidations || forceValidations) && validation;

    return (
      <>
        <View style={[styles.container, error && styles.errorContainer]}>
          <NativeTextInput
            autoFocus={autoFocus}
            enablesReturnKeyAutomatically={false}
            keyboardType={keyboardType}
            maxLength={maxLength}
            onBlur={this.onBlur}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEditing}
            placeholder={placeholder}
            ref={inputRef}
            returnKeyType={returnKeyType}
            style={styles.input}
            value={value}
          />
        </View>
        <View style={styles.error}>
          {error && (
            <Text
              fontColor="red"
              fontSpacing="medium"
            >
              {validation}
            </Text>
          )}
        </View>
      </>
    );
  }
}
