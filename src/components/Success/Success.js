// @flow

import React, { PureComponent } from 'react';
import {
  View,
} from 'react-native';
import validate from 'validate.js';
import { boundMethod } from 'autobind-decorator';
import { isEmpty } from 'lodash';

import { successValidations } from 'constants/validations';

import {
  ContentContainer,
} from 'UI';

import SuccessFooter from './SuccessFooter.js';
import SuccessForm from './SuccessForm.js';

type Props = {
  onSubmit: (state: Object) => void,
};

type State = {
  areaCode?: string,
  prefix?: string,
  lineNumber?: string,
  phoneNumberValidations?: string[],
};

export default class Landing extends PureComponent<Props, State> {
  state = {};

  @boundMethod
  onSubmit() {
    const {
      areaCode,
      prefix,
      lineNumber,
    } = this.state;
 
    const phoneNumberValidation = validate(
      {
        areaCode,
        prefix,
        lineNumber,
        phoneNumber: +`${areaCode || ''}${prefix || ''}${lineNumber || ''}`,
      },
      successValidations,
    );

    if (phoneNumberValidation) {
      this.setState({
        phoneNumberValidations: ['Phone number is invalid, please try again'],
      });
    } else {
      console.log('TODO');
    }
  }

  @boundMethod
  updatePhoneNumber(number: string, id: string) {
    this.setState({
      [id]: number,
      phoneNumberValidations: undefined,
    });
  }

  render() {
    console.log(this.state);
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
