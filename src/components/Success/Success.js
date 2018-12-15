// @flow

import React, { PureComponent } from 'react';
import { boundMethod } from 'autobind-decorator';

import {
  ContentContainer,
} from 'UI';

import SuccessFooter from './SuccessFooter.js';
import SuccessForm from './SuccessForm.js';

type Props = {
  onSubmit: (phoneNumber: number) => void,
  onInactive: () => void,
  validate: Validate,
  validationObject: ValidationObject,
};

type State = {
  areaCode?: string,
  prefix?: string,
  lineNumber?: string,
};

const INACTVE_THRESHOLD = 6000;

export default class Landing extends PureComponent<Props, State> {
  inactiveTimeout: any;

  static defaultProps = {
    validationObject: {},
  };

  state = {};

  componentDidMount() {
    const { validate } = this.props;
    validate(this.state);
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
    const {
      validate,
    } = this.props;

    this.stopClock();

    const phoneNumber = +`${areaCode || ''}${prefix || ''}${lineNumber || ''}`;
    const phoneNumberValidation = validate(
      {
        areaCode,
        prefix,
        lineNumber,
        phoneNumber,
      },
      {
        phoneNumber: true,
        areaCode: true,
        prefix: true,
        lineNumber: true,
      },
    );

    if (phoneNumberValidation) {
      this.startClock();
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

    this.setState(
      { [id]: number },
      () => {
        this.stopClock();
      },
    );
  }

  render() {
    const {
      validate,
    } = this.props;

    return (
      <ContentContainer FooterComponent={SuccessFooter}>
        <SuccessForm
          updatePhoneNumber={this.updatePhoneNumber}
          onSubmit={this.onSubmit}
          validate={validate}
          {...this.state}
        />
      </ContentContainer>
    );
  }
}
