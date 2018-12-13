// @flow

import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import {
  Button,
  Text,
  TextInput,
} from 'UI';

import styles from './SuccessForm.css.js';

type Props = {
};

export default class Landing extends PureComponent<Props> {
  render() {
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
            <View style={[styles.input, styles.input3]}>
              <TextInput
                maxLength={3}
                keyboardType="numeric"
              />
            </View>
            <Text fontSize="h1">&nbsp;)&nbsp;</Text>
            <View style={[styles.input, styles.input3]}>
              <TextInput
                maxLength={3}
                keyboardType="numeric"
              />
            </View>
            <Text fontSize="h1">&nbsp;-&nbsp;</Text>
            <View style={[styles.input, styles.input4]}>
              <TextInput
                maxLength={4}
                keyboardType="numeric"
              />
            </View>

          </View>
         
          
          {/* <View style={styles.inputs}>
            <View>
              <TextInput />
            </View>
            <View>
              <TextInput />
            </View>
            <View>
              <TextInput />
            </View>
          </View> */}
        </View>
      </KeyboardAvoidingView>
    );
  }
}