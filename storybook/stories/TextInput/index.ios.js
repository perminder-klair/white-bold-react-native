import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

const MyTextInput = props => (
  <TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    onChangeText={props.onChange}
    value={props.value}
  />
);

MyTextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

MyTextInput.defaultProps = {
  onChange: () => {},
  value: '',
};

export { MyTextInput as default };
