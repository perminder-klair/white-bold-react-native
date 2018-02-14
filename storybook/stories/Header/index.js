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

  const myLeftComponent = {
    ...leftComponent,
    icon: header.myLeftComponent.icon,
    color: header.myLeftComponent.color,
  };
  const myCenterComponent = {
    ...centerComponent,
    text: header.myCenterComponent.text,
  };
  const myRightComponent = {
    ...rightComponent,
    icon: header.myRightComponent.icon,
    color: header.myRightComponent.color,
  };
  return (
    <HeaderEl
      leftComponent={myLeftComponent}
      centerComponent={myCenterComponent}
      rightComponent={myRightComponent}
      {...remainingProps}
    />
  );
};

export { Header as default };
