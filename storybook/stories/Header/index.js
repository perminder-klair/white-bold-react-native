import React from 'react';
// import PropTypes from 'prop-types';
import { Header as HeaderEl } from 'react-native-elements';

const Header = props => {
  const { ...remainingProps } = props;
  return (
    <HeaderEl
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      {...remainingProps}
    />
  );
};

export { Header as default };
