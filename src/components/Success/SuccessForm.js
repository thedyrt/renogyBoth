// @flow

import React, { PureComponent } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';

import { boundMethod } from 'autobind-decorator';

import {
  Button,
  Text,
} from 'UI';
import {
  WithValidations,
} from 'Wrappers';

import styles from './SuccessForm.css.js';

type Props = {
  areaCode?: string,
  lineNumber?: string,
  onInactive: () => void,
  onSubmit: () => void,
  prefix?: string,
  updatePhoneNumber: (value: string, id: string) => void,
  validate: Validate,
};

const nextInput = {
  areaCode: 'prefixRef',
  prefix: 'lineNumberRef',
};

export default class Landing extends PureComponent<Props> {
  onSubmit: Function;

  areaCodeRef = React.createRef();

  prefixRef = React.createRef();

  lineNumberRef = React.createRef();

  @boundMethod
  onChangeText(value: string, id: string) {
    const {
      updatePhoneNumber,
      validate,
    } = this.props;

    const phoneNumberPartsValidation = validate(
      {
        ...this.props,
        [id]: value,
      },
    ) || {};

    const validation = phoneNumberPartsValidation[id];

    if (!validation) {
      this.focusNextInput(value, id);
    }

    updatePhoneNumber(value, id);
  }

  @boundMethod
  onNext(id: string) {
    const { props } = this;
    const value = props[id];

    this.focusNextInput(value, id);
  }


  focusNextInput(value: string, id: string) {
    // $FlowFixMe
    const { current: nextInputEl } = this[nextInput[id]] || {};

    if (nextInputEl) {
      nextInputEl.focus();
    }
  }

  render() {
    const {
      areaCode,
      lineNumber,
      onInactive,
      onSubmit,
      prefix,
    } = this.props;

    return (
      <KeyboardAvoidingView
        behavior="padding"
      >
        <View style={styles.form}>
          <TouchableOpacity
            style={styles.back}
            onPress={onInactive}
          >
            <Image
              source={{ uri: 'close' }}
              style={styles.backButton}
            />
          </TouchableOpacity>
          <Text
            fontFamily="dosis"
            fontSize="h1"
            fontSpacing="large"
            fontWeight="semiBold"
            fontAlignment="center"
          >
            THANKS FOR ENTERING!
          </Text>
          <Text
            fontFamily="dosis"
            fontSize="h2"
            fontSpacing="large"
            fontWeight="semiBold"
          >
            Take The Dyrt with you!
          </Text>
          <Text
            fontSize="h3"
          >
            Enter your phone number to download our free app.
          </Text>
          <Text
            fontSize="h5"
            fontSpacing="large"
          >
            (available for both iOS and Android)
          </Text>
          <View style={styles.inputs}>
            <Text fontSize="h1">(&nbsp;</Text>
            <View style={styles.input3}>
              <WithValidations.TextInput
                id="areaCode"
                inputRef={this.areaCodeRef}
                keyboardType="numeric"
                maxLength={3}
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onNext}
                returnKeyType="next"
                value={areaCode}
              />
            </View>
            <Text fontSize="h1">&nbsp;)&nbsp;</Text>
            <View style={styles.input3}>
              <WithValidations.TextInput
                id="prefix"
                inputRef={this.prefixRef}
                keyboardType="numeric"
                maxLength={3}
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onNext}
                returnKeyType="next"
                value={prefix}
              />
            </View>
            <Text fontSize="h1">&nbsp;-&nbsp;</Text>
            <View style={styles.input4}>
              <WithValidations.TextInput
                id="lineNumber"
                inputRef={this.lineNumberRef}
                keyboardType="phone-pad"
                maxLength={4}
                onChangeText={this.onChangeText}
                onSubmitEditing={onSubmit}
                value={lineNumber}
              />
            </View>
          </View>
          <View style={styles.error}>
            <WithValidations.ValidationErrorMessage
              id="phoneNumber"
            />
          </View>
          <Button
            label="SUBMIT"
            onPress={onSubmit}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
