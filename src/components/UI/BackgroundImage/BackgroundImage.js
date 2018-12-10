// @flow

import React, { PureComponent } from 'react';
import { Image } from 'react-native';

import styles from './BackgroundImage.css.js';

type Props = {
  uri: string,
};

export class BackgroundImage extends PureComponent<Props> {
  render() {
    const { uri } = this.props;

    return (
      <Image
        source={{ uri }}
        style={styles.background}
      />
    );
  }
}
