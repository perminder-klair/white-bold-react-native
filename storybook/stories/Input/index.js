import React from 'react';
import PropTypes from 'prop-types';
import { Input as InputEl } from 'react-native-elements';

import {} from '../variables';

const Input = props => {
  const { containerStyle, ...remainingProps } = props;
  const myContainerStyle = { ...containerStyle };
  return <InputEl containerStyle={myContainerStyle} {...remainingProps} />;
};

Input.propTypes = {
  type: PropTypes.string,
};

Input.defaultProps = {
  onChange: () => {},
  value: '',
};

export { Input as default };
