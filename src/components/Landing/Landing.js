// @flow

import React, { PureComponent } from 'react';
import {
  View,
} from 'react-native';
import validate from 'validate.js';
import { boundMethod } from 'autobind-decorator';
import { isEmpty } from 'lodash';

import { landingValidations } from 'constants/validations';

import {
  ContentContainer,
} from 'UI';

import LandingForm from './LandingForm.js';
import LandingFooter from './LandingFooter.js';

type Props = {
  onSubmit: (state: Object) => void,
};

type State = {
  acceptEmail: true | undefined,
  acceptTerms: true | undefined,
  email?: string,
  forceValidations: boolean,
  isViewingTerms: boolean,
  validationObject: string[],
};

export default class Landing extends PureComponent<Props, State> {
  state = {
    acceptEmail: true,
    acceptTerms: undefined,
    forceValidations: false,
    isViewingTerms: false,
    validationObject: validate({ acceptTerms: true, email: undefined }, landingValidations),
  };

  @boundMethod
  onSubmit() {
    const { onSubmit } = this.props;
    const { state } = this;

    const validationObject = validate(state, landingValidations);

    if (isEmpty(validationObject)) {
      console.log('DO THINGS', onSubmit);
    } else {
      this.setState({
        validationObject,
        forceValidations: true,
      });
    }
  }

  @boundMethod
  toggleViewTerms() {
    console.log('TODO IMPLEMENT THIS');
    this.setState((prevState: State) => ({
      isViewingTerms: !prevState.isViewingTerms,
    }));
  }

  @boundMethod
  updateEmail(email: string) {
    const newState = {
      ...this.state,
      email,
    };

    this.setState({
      ...newState,
      validationObject: validate(newState, landingValidations),
    });
  }

  @boundMethod
  acceptCondition(id: 'acceptTerms' | 'acceptEmail') {
    const { state } = this;

    const newState = {
      ...state,
      [id]: state[id] === true ? undefined : true,
    };

    this.setState({
      ...newState,
      validationObject: validate(newState, landingValidations),
    });
  }

  render() {
    return (
      <ContentContainer
        FooterComponent={LandingFooter}
      >
        <LandingForm
          toggleViewTerms={this.toggleViewTerms}
          onSubmit={this.onSubmit}
          updateEmail={this.updateEmail}
          acceptCondition={this.acceptCondition}
          {...this.state}
        />
      </ContentContainer>
    );
  }
}
