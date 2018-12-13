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
  onSubmit: ({ email: string, emailOptIn: boolean }) => void,
};

type State = {
  acceptEmail: true | void,
  acceptTerms: true | void,
  email?: string,
  isViewingTerms: boolean,
  validationObject: ValidationObject,
  visibleValidations: VisibleValidations,
};

const cleanState = ({
  acceptEmail: true,
  acceptTerms: undefined,
  isViewingTerms: false,
  validationObject: {},
  visibleValidations: {},
  email: '',
}: Object);

export default class Landing extends PureComponent<Props, State> {
  state = cleanState;

  @boundMethod
  onSubmit() {
    const { onSubmit } = this.props;
    const { state } = this;

    const validationObject = validate(state, landingValidations);

    if (isEmpty(validationObject)) {
      this.setState({
        ...cleanState,
      }, () => {
        // $FlowFixMe validations
        onSubmit({
          email: state.email,
          emailOptIn: !!state.acceptEmail,
        });
      });
    } else {
      this.setState({
        validationObject,
        visibleValidations: { email: true, acceptTerms: true },
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
  onInputBlur(inputId: string) {
    this.setState((prevState: State) => ({
      visibleValidations: {
        ...prevState.visibleValidations,
        [inputId]: true,
      },
    }));
  }

  @boundMethod
  acceptCondition(id: 'acceptTerms' | 'acceptEmail') {
    const { state } = this;

    const newState = {
      ...state,
      [id]: state[id] === true ? undefined : true,
      visibleValidations: {
        ...state.visibleValidations,
        [id]: true,
      },
    };

    this.setState({
      ...newState,
      validationObject: validate(newState, landingValidations),
    });
  }

  @boundMethod
  acceptTerms() {
    const newState = {
      ...this.state,
      acceptTerms: true,
      isViewingTerms: false,
    };

    this.setState({
      ...newState,
      validationObject: validate(newState, landingValidations),
    });
  }

  render() {
    const {
      isViewingTerms,
    } = this.state;

    console.log('STATE', this.state);
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
            onInputBlur={this.onInputBlur}
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
