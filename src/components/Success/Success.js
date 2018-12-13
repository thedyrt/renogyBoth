// @flow

import React, { PureComponent } from 'react';
import validate from 'validate.js';
import { boundMethod } from 'autobind-decorator';

import { successValidations } from 'constants/validations';

import {
  ContentContainer,
} from 'UI';

import SuccessFooter from './SuccessFooter.js';
import SuccessForm from './SuccessForm.js';

type Props = {
  onSubmit: (phoneNumber: number) => void,
  onInactive: () => void,
};

type State = {
  areaCode?: string,
  prefix?: string,
  lineNumber?: string,
  phoneNumberValidations?: string[],
};

const INACTVE_THRESHOLD = 5000;

export default class Landing extends PureComponent<Props, State> {
  inactiveTimeout: any;

  state = {};

  componentDidMount() {
    this.startClock();
  }

  componentWillUnmount() {
    this.stopClock();
  }

  startClock() {
    const { onInactive } = this.props;
    this.inactiveTimeout = setTimeout(onInactive, INACTVE_THRESHOLD);
  }

  stopClock() {
    clearTimeout(this.inactiveTimeout);
  }

  @boundMethod
  onSubmit() {
    const {
      areaCode,
      prefix,
      lineNumber,
    } = this.state;
    
    this.stopClock();

    const phoneNumber = +`${areaCode || ''}${prefix || ''}${lineNumber || ''}`;
    const phoneNumberValidation = validate(
      {
        areaCode,
        prefix,
        lineNumber,
        phoneNumber,
      },
      successValidations,
    );

    if (phoneNumberValidation) {
      this.setState({
        phoneNumberValidations: ['Phone number is invalid, please try again'],
      }, () => {
        this.startClock();
      });
    } else {
      const {
        onSubmit,
      } = this.props;

      this.setState({}, () => {
        onSubmit(phoneNumber);
      });
    }
  }

  @boundMethod
  updatePhoneNumber(number: string, id: string) {
    this.stopClock();
    this.setState({
      [id]: number,
      phoneNumberValidations: undefined,
    }, () => {
      this.stopClock();
    });
  }

  render() {
    return (
      <ContentContainer FooterComponent={SuccessFooter}>
        <SuccessForm
          updatePhoneNumber={this.updatePhoneNumber}
          onSubmit={this.onSubmit}
          {...this.state}
        />
      </ContentContainer>
    );
  }
}
