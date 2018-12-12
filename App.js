// @flow

import React, { Component } from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Landing from 'components/Landing/Landing.js';
import Success from 'components/Success/Success.js';
import TermsAndConditions from 'components/TermsAndConditions/TermsAndConditions.js';

YellowBox.ignoreWarnings(['unknown call: "relay:check"']);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        {/* <Success /> */}
        {/* <Landing /> */}
        <TermsAndConditions />
      </>
    );
  }
}
