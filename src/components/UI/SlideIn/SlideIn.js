// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { Animated } from 'react-native';

import standards from 'constants/standards';

import styles from './SlideIn.css.js';

type Props = {
  children: Node,
  isVisible: boolean,
};

type State = {
  isVisible: boolean,
};

const HIDDEN_X = standards.windowWidth;
const DURATION = 300;

export class SlideIn extends PureComponent<Props, State> {
  slideAnim = new Animated.Value(standards.windowWidth);

  constructor(props: Props) {
    super(props);

    const { isVisible } = props;
    this.slideAnim = new Animated.Value(
      // 0
      isVisible ? 0 : HIDDEN_X,
    );

    this.state = {
      isVisible,
    };
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.isVisible && !prevProps.isVisible) {
      this.show();
    } else if (!this.props.isVisible && prevProps.isVisible) {
      this.hide();
    }
  }


  hide() {
    Animated.timing(
      this.slideAnim,
      {
        toValue: HIDDEN_X,
        duration: DURATION,
        useNativeDriver: true,
      },
    ).start(() => {
      this.setState({
        isVisible: false,
      });
    });
  }

  show() {
    this.setState({
      isVisible: true,
    }, () => {
      Animated.timing(
        this.slideAnim,
        {
          toValue: 0,
          duration: DURATION,
          useNativeDriver: true,
        },
      ).start();
    });
  }

  render() {
    const {
      children,
    } = this.props;
    const {
      isVisible,
    } = this.state;

    return (
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                translateX: this.slideAnim,
              },
            ],
          },
        ]}
      >
        {isVisible && (
          children
        )}
      </Animated.View>
    );
  }
}
