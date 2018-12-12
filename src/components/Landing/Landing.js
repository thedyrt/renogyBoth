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
  validations: string[],
};

export default class Landing extends PureComponent<Props, State> {
  state = {
    acceptEmail: true,
    acceptTerms: undefined,
    forceValidations: false,
    isViewingTerms: false,
    validations: validate({ acceptTerms: true, email: undefined }, landingValidations),
  };

  @boundMethod
  onSubmit() {
    const { onSubmit } = this.props;
    const { state } = this;

    const validations = validate(state, landingValidations);

    if (isEmpty(validations)) {
      console.log('DO THINGS', onSubmit);
    } else {
      this.setState({
        validations,
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
      validations: validate(newState, landingValidations),
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
      validations: validate(newState, landingValidations),
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
