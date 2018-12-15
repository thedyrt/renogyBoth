// @flow

import React, { Component } from 'react';
import type { Node } from 'react';
import validate from 'validate.js';
import { boundMethod } from 'autobind-decorator';

import {
  TextInput,
  Checkbox,
  ValidationErrorMessage,
} from 'UI';

type State = {
  validationObject: ValidationObject,
  visibleValidations: VisibleValidations,
  validate: Validate,
  udpateComponentVisibilityState: UpdateComponentVisibilityState,
};

type Props = {
  validationRules: Object,
  render: (state: State) => Node,
};

const ValidationContext = React.createContext({});

export class WithValidations extends Component<Props, State> {
  static TextInput = (props: Object) => (
    <ValidationContext.Consumer>
      {({
        udpateComponentVisibilityState,
        validationObject = {},
        visibleValidations = {},
      }) => (
        <TextInput
          onBlur={udpateComponentVisibilityState}
          validations={validationObject[props.id]}
          showValidations={visibleValidations[props.id]}
          {...props}
        />
      )}
    </ValidationContext.Consumer>
  );

  static Checkbox = (props: Object) => (
    <ValidationContext.Consumer>
      {({
        validationObject = {},
        visibleValidations = {},
      }) => (
        <Checkbox
          validations={validationObject[props.id]}
          showValidations={visibleValidations[props.id]}
          {...props}
        />
      )}
    </ValidationContext.Consumer>
  );

  static ValidationErrorMessage = (props: Object) => (
    <ValidationContext.Consumer>
      {({
        validationObject = {},
        visibleValidations = {},
      }) => (
        <ValidationErrorMessage
          validations={validationObject[props.id]}
          showValidations={visibleValidations[props.id]}
          {...props}
        />
      )}
    </ValidationContext.Consumer>
  );

  /* eslint-disable */
  state = ({
    validate: this.validate,
    udpateComponentVisibilityState: this.udpateComponentVisibilityState,
    validationObject: {},
    visibleValidations: {},
  }: Object);
  /* eslint-enable */

  @boundMethod
  validate(resource?: Object, newVisibilityState?: VisibleValidations) {
    const { validationRules } = this.props;
    const validationObject = resource
      ? validate(resource, validationRules)
      : undefined;

    this.setState({
      ...resource
        ? { validationObject }
        : {},
      ...newVisibilityState
        ? { visibleValidations: newVisibilityState }
        : {},
    });

    return validationObject;
  }

  @boundMethod
  udpateComponentVisibilityState(id: string, visibilityState: boolean = true) {
    this.setState((prevState: State) => ({
      visibleValidations: {
        ...prevState.visibleValidations,
        [id]: visibilityState,
      },
    }));
  }


  render() {
    const { render } = this.props;

    return (
      <ValidationContext.Provider value={this.state}>
        {render(this.state)}
      </ValidationContext.Provider>
    );
  }
}
