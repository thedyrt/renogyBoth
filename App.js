// @flow

import React, { Component } from 'react';
import { StatusBar, YellowBox, Keyboard } from 'react-native';
import { boundMethod } from 'autobind-decorator';

import {
  SlideIn,
} from 'UI';

import Landing from 'components/Landing/Landing.js';
import Success from 'components/Success/Success.js';

YellowBox.ignoreWarnings(['unknown call: "relay:check"']);

type Props = {};
type State = {
  isViewingSuccess: boolean,
  hideLanding: boolean,
};

export default class App extends Component<Props, State> {
  state = {
    isViewingSuccess: false,
    hideLanding: false,
  };

  @boundMethod
  addUserEmail() {
    Keyboard.dismiss();
    this.setState({
      isViewingSuccess: true,
    });
  }

  @boundMethod
  reset() {
    Keyboard.dismiss();
    this.setState({
      isViewingSuccess: false,
    });
  }

  @boundMethod
  addUserPhone() {
    Keyboard.dismiss();
    this.setState({
      isViewingSuccess: false,
    });
  }

  render() {
    const {
      isViewingSuccess,
      hideLanding,
    } = this.state;

    return (
      <>
        <StatusBar barStyle="light-content" />
        {!hideLanding && (
          <Landing
            onSubmit={this.addUserEmail}
          />
        )}
        <SlideIn isVisible={isViewingSuccess}>
          <Success
            onSubmit={this.addUserPhone}
            onInactive={this.reset}
          />
        </SlideIn>
      </>
    );
  }
}
