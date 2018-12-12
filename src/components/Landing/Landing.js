// @flow

import React, { PureComponent } from 'react';
import validate from 'validate.js';
import { boundMethod } from 'autobind-decorator';
import { isEmpty } from 'lodash';

import { landingValidations } from 'constants/validations';

import TermsAndConditions from 'components/TermsAndConditions/TermsAndConditions.js';

import {
  ContentContainer,
  SlideIn,
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

  @boundMethod
  acceptTerms() {
    this.setState({
      acceptTerms: true,
      isViewingTerms: false,
    });
  }

  render() {
    const {
      isViewingTerms,
    } = this.state;

    return (
      <>
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
        <SlideIn isVisible={isViewingTerms}>
          <TermsAndConditions
            cancel={this.toggleViewTerms}
            accept={this.acceptTerms}
          />
        </SlideIn>
      </>
    );
  }
}
