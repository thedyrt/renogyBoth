// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import {
  View,
} from 'react-native';

import {
  BackgroundImage,
} from 'UI';

import styles from './ContentContainer.css.js';

type Props = {
  children: Node,
  FooterComponent: typeof PureComponent,
};

export class ContentContainer extends PureComponent<Props> {
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
        <FooterComponent />
      </View>
    );
  }
}
