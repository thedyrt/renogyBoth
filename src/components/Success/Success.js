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
  phoneNumber?: number,
};

export default class Landing extends PureComponent<Props, State> {
  renderFooter() {
    return (
      <View
        style={{ 
          // backgroundColor: 'yellow',
          width: standards.windowWidth,
          height: standards.windowHeight / 2,
          paddinHorizontal: standards.paddingLarge,
          paddingBottom: standards.offsetTop
        }}
      >
        <Image
          source={{ uri: footerUri}}
          style={{
            width: undefined,
            height: undefined,
            flex: 1,
          }}

        />
        {/* <BackgroundImage uri={footerUri} /> */}
      </View>
    );
  }

  render() {
    return (
      <ContentContainer
        FooterComponent={SuccessFooter}
      >
        <SuccessForm
      
        />
      </ContentContainer>
    );
  }
}