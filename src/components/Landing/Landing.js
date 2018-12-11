// @flow

import React, { PureComponent } from 'react';
import {
  View,
} from 'react-native';
import { boundMethod } from 'autobind-decorator';

import {
  BackgroundImage,
} from 'UI';

import LandingForm from './LandingForm.js';
import styles from './Landing.css.js';

type Props = {};
type State = {
  isViewingTerms: boolean,
};

export default class Landing extends PureComponent<Props, State> {
  state = {
    isViewingTerms: false,
  };

  @boundMethod
  onSubmit() {
    console.log('IMPLEMENT');
  }

  @boundMethod
  toggleViewTerms() {
    console.log('TODO IMPLEMENT THIS');
    this.setState((prevState: State) => ({
      isViewingTerms: !prevState.isViewingTerms,
    }));
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <BackgroundImage uri="background" />
        <View style={styles.content}>
          <View style={styles.body}>
            <LandingForm
              toggleViewTerms={this.toggleViewTerms}
              onSubmit={this.onSubmit}
            />
          </View>
          <View style={styles.footer}>
            <BackgroundImage uri="footer" />
          </View>
        </View>
      </View>
    );
  }
}
