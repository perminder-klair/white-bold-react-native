import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonEl } from 'react-native-elements';

import { basic, button } from '../variables';

const Button = props => {
  const { buttonStyle, type, ...remainingProps } = props;

  let myButtonStyle = {
    ...buttonStyle,
    width: 325,
    height: 50,
    borderRadius: button.radius,
    backgroundColor: 'black',
  };
  if (type === 'primary') {
    myButtonStyle = {
      ...myButtonStyle,
      backgroundColor: basic.primaryColor,
    };
  } else if (type === 'secondary') {
    myButtonStyle = {
      ...myButtonStyle,
      backgroundColor: 'red',
      borderRadius: 7,
    };
  }

  return <ButtonEl buttonStyle={myButtonStyle} {...remainingProps} />;
};

Button.defaultProps = {
  onPress: () => {},
};

Button.propTypes = {
  type: PropTypes.string,
};

export { Button as default };
