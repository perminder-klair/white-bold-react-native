import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonEl } from 'react-native-elements';

import { button } from '../variables';

const Button = props => {
  const { buttonStyle, textStyle, type, ...remainingProps } = props;
  // console.log('button', button);
  let myButtonStyle = {
    ...buttonStyle,
    width: button.default.width,
    height: button.default.height,
    backgroundColor: button.default.backgroundColor,
  };
  let myTextStyle = {
    ...textStyle,
    color: button.default.color,
    fontWeight: button.default.fontWeight,
  };
  if (type === 'primary') {
    myButtonStyle = {
      ...myButtonStyle,
      backgroundColor: button.primary.backgroundColor,
      borderRadius: button.primary.borderRadius,
    };
    myTextStyle = {
      ...myTextStyle,
      color: button.primary.color,
      fontWeight: button.default.fontWeight,
    };
  } else if (type === 'secondary') {
    myButtonStyle = {
      ...myButtonStyle,
      backgroundColor: button.secondary.backgroundColor,
      borderRadius: button.secondary.borderRadius,
    };
    myTextStyle = {
      ...myTextStyle,
    };
  } else if (type === 'rounded') {
    myButtonStyle = {
      ...myButtonStyle,
      width: button.rounded.width,
      height: button.rounded.height,
      borderRadius: button.rounded.borderRadius,
      backgroundColor: button.rounded.backgroundColor,
      borderWidth: button.rounded.borderWidth,
      borderColor: button.rounded.borderColor,
    };
    myTextStyle = {
      ...myTextStyle,
      color: button.rounded.borderColor,
    };
  } else if (type === 'semiRounded') {
    myButtonStyle = {
      ...myButtonStyle,
      width: button.semiRounded.width,
      height: button.semiRounded.height,
      borderRadius: button.semiRounded.borderRadius,
      backgroundColor: button.semiRounded.backgroundColor,
      borderWidth: button.semiRounded.borderWidth,
      borderColor: button.semiRounded.borderColor,
    };
    myTextStyle = {
      ...myTextStyle,
      color: button.semiRounded.color,
    };
  } else if (type === 'transparent') {
    myButtonStyle = {
      ...myButtonStyle,

      backgroundColor: button.transparent.backgroundColor,
    };
    myTextStyle = {
      ...myTextStyle,
      color: button.transparent.color,
    };
  }

  return (
    <ButtonEl
      buttonStyle={myButtonStyle}
      textStyle={myTextStyle}
      {...remainingProps}
    />
  );
};

Button.defaultProps = {
  onPress: () => {},
};

Button.propTypes = {
  type: PropTypes.string,
};

export { Button as default };
