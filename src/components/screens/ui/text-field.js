'use strict;';

import React, { PureComponent } from 'react';
import { TextField } from 'react-native-material-textfield';

type TextFieldProps = {
  value: string,
  label: string,
  onChangeText: Function,
  id: string
};

type TextFieldState = {
  value: string
};

class MaterialTextField extends PureComponent<TextFieldProps, TextFieldState> {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    };
  }

  onChangeText = (value: string) => {
    this.setState({ value: value });
    this.props.onChangeText(value, this.props.id);
  };

  render() {
    const { label, value, onChangeText } = this.props;
    return (
      <TextField
        label={label}
        value={this.state.value}
        onChangeText={this.onChangeText}
      />
    );
  }
}

export default MaterialTextField;
