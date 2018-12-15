// @flow

import React, { Component } from 'react';
import { StatusBar, YellowBox, Keyboard } from 'react-native';
import { boundMethod } from 'autobind-decorator';

import { firebaseService } from 'services/firebase';

import {
  landingValidations,
  successValidations,
} from 'constants/validations';

import {
  SlideIn,
} from 'UI';
import {
  WithValidations,
} from 'Wrappers';

import Landing from 'components/Landing/Landing.js';
import Success from 'components/Success/Success.js';

YellowBox.ignoreWarnings(['unknown call: "relay:check"']);

type Props = {};
type State = {
  isViewingSuccess: boolean,
  hideLanding: boolean,
  user: User,
};

export default class App extends Component<Props, State> {
  state = {
    isViewingSuccess: false,
    hideLanding: false,
    user: ({}: Object),
  };

  addUser(user: User) {
    Keyboard.dismiss();

    firebaseService.addUser(user);

    this.setState({
      isViewingSuccess: false,
      user: ({}: Object),
    });
  }

  @boundMethod
  addUserEmail(user: User) {
    Keyboard.dismiss();
    this.setState({
      isViewingSuccess: true,
      user,
    });
  }

  @boundMethod
  reset() {
    this.addUser(this.state.user);
  }

  @boundMethod
  addUserPhone(phoneNumber: number) {
    this.addUser({
      ...this.state.user,
      phoneNumber,
    });
  }

  @boundMethod
  renderLanding(
    validationState: { validate: Validate, validationObject: ValidationObject },
  ) {
    const {
      validate,
      validationObject,
    } = validationState;

    return (
      <Landing
        onSubmit={this.addUserEmail}
        validate={validate}
        validationObject={validationObject}
      />
    );
  }

  @boundMethod
  renderSuccess(
    validationState: { validate: Validate, validationObject: ValidationObject },
  ) {
    const {
      validate,
      validationObject,
    } = validationState;

    return (
      <Success
        onSubmit={this.addUserPhone}
        onInactive={this.reset}
        validate={validate}
        validationObject={validationObject}
      />
    );
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
          <WithValidations
            validationRules={landingValidations}
            render={this.renderLanding}
          />
        )}
        <SlideIn isVisible={isViewingSuccess}>
          <WithValidations
            render={this.renderSuccess}
            validationRules={successValidations}
          />
        </SlideIn>
      </>
    );
  }
}
