// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import {
  View,
} from 'react-native';

import {
  BackgroundImage,
} from 'UI';

import styles from './ContentContainer.css';

type Props = {
  children: Node,
  FooterComponent: Node,
};

type State = {
  phoneNumber?: number,
};

export class ContentContainer extends PureComponent<Props, State> {
  static defaultProps = {
    footerFlex: 1,
  };

  render() {
    const {
      children,
      FooterComponent,
    } = this.props;

    return (
      <View style={styles.appContainer}>
        <BackgroundImage uri="background" />
        <View style={styles.body}>
          {children}
        </View>
        {FooterComponent && <FooterComponent />}
      </View>
    );
  }
}
