// @flow

import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import Landing from 'components/Landing/Landing.js';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <Landing />
      </>
    );
  }
}
