// @flow

import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import validate from 'validate.js';
import { boundMethod } from 'autobind-decorator';

import { phoneNumberValidations } from 'constants/validations';

import {
  Button,
  Text,
  TextInput,
} from 'UI';

import styles from './SuccessForm.css.js';

type Props = {
  onSubmit: () => void,
  updatePhoneNumber: (value: string, id: string) => void,
  areaCode?: string,
  prefix?: string,
  lineNumber?: string,
};

type State = {
  validations: Object,
};

const nextInput = {
  areaCode: 'prefixRef',
  prefix: 'lineNumberRef',
};

export default class Landing extends PureComponent<Props, State> {
  areaCodeRef = React.createRef();
  
  prefixRef = React.createRef();
  
  lineNumberRef = React.createRef();

  state = { };

  @boundMethod
  onChangeText(value: string, id: string) {
    const {
      updatePhoneNumber,
    } = this.props;

    const validations = validate(
      { [id]: value },
      phoneNumberValidations,
    );
    const validation = validations[id];

    if (!validation) {
      this.focusNextInput(value, id);
    }

    updatePhoneNumber(value, id);
  }

  @boundMethod
  onSubmitEditing(id: string) {
    const { props } = this;
    const value = props[id];

    const validations = validate(props, phoneNumberValidations);

    this.setState({
      validations,
    }, () => {
      this.focusNextInput(value, id);
    });
  }

  focusNextInput(value: string, id: string) {
    const { current: nextInputEl } = this[nextInput[id]] || {};

    if (nextInputEl) {
      nextInputEl.focus();
    }
  }


  render() {
    const {
      onSubmit,
      areaCode,
      prefix,
      lineNumber,
    } = this.props;
    const {
      validations = {},
    } = this.state;

    console.log('VALID', validations);

    return (
      <KeyboardAvoidingView
        behavior="padding"
      >
        <Text
          fontFamily="dosis"
          fontSize="h1"
          fontSpacing="large"
          fontWeight="semiBold"
          fontAlignment="center"
        >
          THANKS FOR ENTERING!
        </Text>
        <View style={styles.form}>
          <Text
            fontFamily="dosis"
            fontSize="h2"
            fontSpacing="large"
            fontWeight="semiBold"
          >
            Take The Dyrt With you!
          </Text>
          <Text
            fontFamily="dosis"
            fontSize="h3"
            fontWeight="semiBold"
          >
            Enter your phone number to download our free app.
          </Text>
          <Text
            fontFamily="dosis"
            fontSize="h5"
            fontSpacing="large"
            fontWeight="semiBold"
          >
            (available for both iOS and Android)
          </Text>
          <View style={styles.inputs}>
            <Text fontSize="h1">(&nbsp;</Text>
            <View style={styles.input3}>
              <TextInput
                autoFocus
                id="areaCode"
                keyboardType="numeric"
                maxLength={3}
                onChangeText={this.onChangeText}
                inputRef={this.areaCodeRef}
                onSubmitEditing={this.onSubmitEditing}
                returnKeyType="next"
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
                onSubmitEditing={this.onSubmitEditing}
                returnKeyType="next"
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
                onSubmitEditing={onSubmit}
                value={lineNumber}
              />
            </View>
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
