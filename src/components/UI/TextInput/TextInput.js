// @flow

import React, { PureComponent } from 'react';
import {
  TextInput as NativeTextInput,
  View,
} from 'react-native';
import { boundMethod } from 'autobind-decorator';

import styles from './TextInput.css.js';

type Props = {
  autoFocus?: boolean,
  id: string,
  inputRef?: any,
  keyboardType: 'email-address' | 'numeric',
  maxLength?: number,
  onBlur: (id: string) => void,
  onChangeText: (value: string, id: string) => void,
  onSubmitEditing: (id: string) => void,
  placeholder?: string,
  returnKeyType: 'done' | 'next',
  showValidations: boolean,
  validations: ValidationMessages,
  value: string,
};

export class TextInput extends PureComponent<Props> {
  static defaultProps = {
    onBlur: () => {},
    onChangeText: () => {},
    onSubmitEditing: () => {},
    returnKeyType: 'done',
    showValidations: false,
    validations: [],
  };

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

    onSubmitEditing(id);
  }

  @boundMethod
  onBlur() {
    const {
      onBlur,
      id,
    } = this.props;

    onBlur(id);
  }

  render() {
    const {
      autoFocus,
      inputRef,
      keyboardType,
      maxLength,
      placeholder,
      returnKeyType,
      showValidations,
      validations,
      value,
    } = this.props;

    const validation = validations[0];
    const error = validation && showValidations;

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
        {/* {showValidationMessage && (
          <ValidationErrorMessage
            validations={validations}
            shouldShowMessage={showValidations || forceValidations}
          />
        )} */}
      </>
    );
  }
}
