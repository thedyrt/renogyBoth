// @flow

import React, { PureComponent } from 'react';
import { boundMethod } from 'autobind-decorator';
import { isEmpty } from 'lodash';

import TermsAndConditions from 'components/TermsAndConditions/TermsAndConditions.js';

import {
  ContentContainer,
  SlideIn,
} from 'UI';

import LandingForm from './LandingForm.js';
import LandingFooter from './LandingFooter.js';

type Props = {
  onSubmit: (user: User) => void,
  validationObject: ValidationObject,
  validate: Validate,
};

type State = {
  acceptTerms: true | void,
  email?: string,
  isViewingTerms: boolean,
};

const cleanState = ({
  acceptTerms: undefined,
  isViewingTerms: false,
  email: '',
}: Object);

export default class Landing extends PureComponent<Props, State> {
  state = { ...cleanState };

  static defaultProps = {
    validationObject: {},
  };

  componentDidMount() {
    const { validate } = this.props;
    validate(this.state);
  }

  @boundMethod
  onSubmit() {
    const {
      onSubmit,
      validationObject,
      validate,
    } = this.props;
    const { state } = this;

    if (isEmpty(validationObject)) {
      validate(
        {},
        { email: false, acceptTerms: false },
      );

      this.setState({
        ...cleanState,
      }, () => {
        // $FlowFixMe validations
        onSubmit({
          email: state.email,
        });

        validate(
          this.state,
          { email: false, acceptTerms: false },
        );
      });
    } else {
      validate(undefined, { email: true, acceptTerms: true });
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
    const { validate } = this.props;
    const newState = {
      ...this.state,
      email,
    };

    validate(newState);

    this.setState(newState);
  }

  @boundMethod
  acceptCondition(id: string) {
    const { validate } = this.props;
    const { state } = this;

    const newState = {
      ...state,
      [id]: state[id] === true ? undefined : true,
    };

    validate(newState, { [id]: true });

    this.setState(newState);
  }

  @boundMethod
  acceptTerms() {
    const {
      validate,
    } = this.props;

    const newState = {
      ...this.state,
      acceptTerms: true,
      isViewingTerms: false,
    };

    validate(newState);

    this.setState(newState);
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
