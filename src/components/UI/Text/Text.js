// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';

import { Text as NativeText } from 'react-native';

import styles from './Text.css.js';

type Props = {
  children: Node,
  fontAlignment?: 'left' | 'right' | 'center',
  fontColor?: 'grayLightest' | 'gold' | 'red' | 'white',
  fontFamily?: 'dosis',
  fontSize?: 'h1' | 'h2' | 'h3' | 'body' | 'h5',
  fontSpacing?: 'large' | 'medium' | 'small',
  fontWeight?: 'semiBold',
};

export class Text extends PureComponent<Props> {
  static defaultProps = {
    fontAlignment: 'left',
    fontSize: 'body',
    fontColor: 'grayLightest',
  };

  getStyles() {
    const {
      fontAlignment,
      fontColor,
      fontFamily,
      fontSize,
      fontSpacing,
      fontWeight,
    } = this.props;

    return [
      fontAlignment && styles[`${fontAlignment}Align`],
      fontColor && styles[fontColor],
      fontSize && styles[fontSize],
      fontWeight && styles[fontWeight],
      fontSpacing && styles[`${fontSpacing}Spacing`],
      fontFamily && styles[fontFamily],
    ];
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <NativeText
        style={this.getStyles()}
      >
        {children}
      </NativeText>
    );
  }
}
