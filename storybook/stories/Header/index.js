import React from 'react';
// import PropTypes from 'prop-types';
import { Header as HeaderEl } from 'react-native-elements';
import { header } from '../variables';

const Header = props => {
  const {
    leftComponent,
    centerComponent,
    rightComponent,
    ...remainingProps
  } = props;

  const myleftComponent = {
    ...leftComponent,
    icon: header.myleftComponent.icon,
    color: header.myleftComponent.color,
  };
  const mycenterComponent = {
    ...centerComponent,
    text: header.mycenterComponent.text,
  };
  const myrightComponent = {
    ...rightComponent,
    icon: header.myrightComponent.icon,
    color: header.myrightComponent.color,
  };
  return (
    <HeaderEl
      leftComponent={myleftComponent}
      centerComponent={mycenterComponent}
      rightComponent={myrightComponent}
      {...remainingProps}
    />
  );
};

export { Header as default };
