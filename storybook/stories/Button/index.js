import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonEl } from 'react-native-elements';

import { button } from '../variables';

const Button = props => {
  const { buttonStyle, textStyle, type, ...remainingProps } = props;
  // console.log('button', button);
  let myButtonStyle = {
    ...buttonStyle,
  };
  let myTextStyle = {
    ...textStyle,
  };
  if (type === 'primary') {
    myButtonStyle = {
      ...buttonStyle,
      backgroundColor: button.primary.backgroundColor,
      borderRadius: button.primary.borderRadius,
    };
    myTextStyle = {
      ...textStyle,
      color: button.primary.color,
      // fontWeight: button.default.fontWeight,
    };
  } else if (type === 'secondary') {
    myButtonStyle = {
      ...buttonStyle,
      backgroundColor: button.secondary.backgroundColor,
      borderRadius: button.secondary.borderRadius,
    };
    myTextStyle = {
      ...textStyle,
    };
  } else if (type === 'rounded') {
    myButtonStyle = {
      ...buttonStyle,
      width: button.rounded.width,
      height: button.rounded.height,
      borderRadius: button.rounded.borderRadius,
      backgroundColor: button.rounded.backgroundColor,
      borderWidth: button.rounded.borderWidth,
      borderColor: button.rounded.borderColor,
    };
    myTextStyle = {
      ...textStyle,
      color: button.rounded.color,
    };
  } else if (type === 'semiRounded') {
    myButtonStyle = {
      ...buttonStyle,
      width: button.semiRounded.width,
      height: button.semiRounded.height,
      borderRadius: button.semiRounded.borderRadius,
      backgroundColor: button.semiRounded.backgroundColor,
      borderWidth: button.semiRounded.borderWidth,
      borderColor: button.semiRounded.borderColor,
    };
    myTextStyle = {
      ...textStyle,
      color: button.semiRounded.color,
    };
  } else if (type === 'transparent') {
    myButtonStyle = {
      ...buttonStyle,
      borderRadius: button.transparent.borderRadius,
      backgroundColor: button.transparent.backgroundColor,
    };
    myTextStyle = {
      ...textStyle,
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
