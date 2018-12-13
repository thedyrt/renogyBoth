// @flow

import React, { PureComponent } from 'react';

import {
  Text,
} from 'UI';

type Props = {
  heading: string,
  terms: string,
};

export default class Condition extends PureComponent<Props> {
  render() {
    const {
      heading,
      terms,
    } = this.props;

    return (
      <>
        <Text
          fontSize="h5"
          fontWeight="semiBold"
          fontColor="white"
        >
          {heading}
        </Text>
        <Text
          fontSize="h5"
          fontSpacing="medium"
          fontColor="white"
        >
          {terms}
        </Text>
      </>
    );
  }
}
