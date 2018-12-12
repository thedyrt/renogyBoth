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
};

export default class Landing extends PureComponent<Props, State> {
  @boundMethod
  onSubmit() {
    console.log('TODO');
  }

  @boundMethod
  updatePhoneNumber(number: string, id: string) {
    this.setState({
      [id]: number,
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
