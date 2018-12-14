// @flow

import React, { PureComponent } from 'react';
import {
  View,
  KeyboardAvoidingView,
} from 'react-native';
import validate from 'validate.js';
import { boundMethod } from 'autobind-decorator';
import { get } from 'lodash';

import { phoneNumberValidations } from 'constants/validations';

import {
  Button,
  Text,
  TextInput,
  ValidationErrorMessage,
} from 'UI';

import styles from './SuccessForm.css.js';

type Props = {
  onSubmit: () => void,
  updatePhoneNumber: (value: string, id: string) => void,
  areaCode?: string,
  prefix?: string,
  lineNumber?: string,
  phoneNumberValidations?: ValidationMessages,
};

type State = {
  phoneNumberPartsValidation: ValidationObject,
  visibleValidations: VisibleValidations,
};

const nextInput = {
  areaCode: 'prefixRef',
  prefix: 'lineNumberRef',
};

export default class Landing extends PureComponent<Props, State> {
  onSubmit: Function;

  areaCodeRef = React.createRef();

  prefixRef = React.createRef();

  lineNumberRef = React.createRef();

  state = {
    phoneNumberPartsValidation: validate({}, phoneNumberValidations),
    visibleValidations: {},
  };

  @boundMethod
  onChangeText(value: string, id: string) {
    const {
      updatePhoneNumber,
    } = this.props;

    const phoneNumberPartsValidation = validate(
      {
        ...this.props,
        [id]: value,
      },
      phoneNumberValidations,
    ) || {};

    const validation = phoneNumberPartsValidation[id];

    this.setState({
      phoneNumberPartsValidation,
    }, () => {
      if (!validation) {
        this.focusNextInput(value, id);
      }
    });

    updatePhoneNumber(value, id);
  }

  @boundMethod
  onInputBlur(inputId: string) {
    this.setState((prevState: State) => ({
      visibleValidations: {
        ...prevState.visibleValidations,
        [inputId]: true,
      },
    }));
  }

  @boundMethod
  onNext(id: string) {
    const { props } = this;
    const value = props[id];

    this.focusNextInput(value, id);

    const phoneNumberPartsValidation = validate(props, phoneNumberValidations);

    this.setState({
      phoneNumberPartsValidation,
    }, () => {
      this.focusNextInput(value, id);
    });
  }

  @boundMethod
  onSubmit() {
    const { onSubmit } = this.props;

    this.setState((prevState: State) => ({
      visibleValidations: {
        areaCode: !!(get(prevState, ['phoneNumberPartsValidation', 'areaCode']) || []).length,
        prefix: !!(get(prevState, ['phoneNumberPartsValidation', 'prefix']) || []).length,
        lineNumber: !!(get(prevState, ['phoneNumberPartsValidation', 'lineNumber']) || []).length,
      },
    }), () => {
      onSubmit();
    });
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
      phoneNumberValidations,
      prefix,
    } = this.props;
    const {
      phoneNumberPartsValidation = {},
      visibleValidations = {},
    } = this.state;

    return (
      <KeyboardAvoidingView
        behavior="padding"
      >
        <View style={styles.form}>
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
              <TextInput
                id="areaCode"
                inputRef={this.areaCodeRef}
                keyboardType="numeric"
                maxLength={3}
                onChangeText={this.onChangeText}
                onBlur={this.onInputBlur}
                onSubmitEditing={this.onNext}
                returnKeyType="next"
                showValidations={visibleValidations.areaCode}
                validations={phoneNumberPartsValidation.areaCode}
                value={areaCode}
              />
            </View>
            <Text fontSize="h1">&nbsp;)&nbsp;</Text>
            <View style={styles.input3}>
              <TextInput
                id="prefix"
                inputRef={this.prefixRef}
                keyboardType="numeric"
                maxLength={3}
                onChangeText={this.onChangeText}
                onBlur={this.onInputBlur}
                onSubmitEditing={this.onNext}
                returnKeyType="next"
                showValidations={visibleValidations.prefix}
                validations={phoneNumberPartsValidation.prefix}
                value={prefix}
              />
            </View>
            <Text fontSize="h1">&nbsp;-&nbsp;</Text>
            <View style={styles.input4}>
              <TextInput
                id="lineNumber"
                inputRef={this.lineNumberRef}
                keyboardType="phone-pad"
                maxLength={4}
                onChangeText={this.onChangeText}
                onBlur={this.onInputBlur}
                onSubmitEditing={this.onSubmit}
                showValidations={visibleValidations.lineNumber}
                validations={phoneNumberPartsValidation.lineNumber}
                value={lineNumber}
              />
            </View>
          </View>
          <View style={styles.error}>
            <ValidationErrorMessage validations={phoneNumberValidations} showValidations />
          </View>
          <Button
            label="SUBMIT"
            onPress={this.onSubmit}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
