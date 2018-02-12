import React from 'react';
// import PropTypes from 'prop-types';
import { List as ListEl, ListItem as ListItemEl } from 'react-native-elements';

import { list } from '../variables';

const List = props => {
  const { ...remainingProps } = props;
  return (
    <ListEl {...remainingProps}>
      {list.map((l, i) => (
        <ListItemEl
          roundAvatar
          avatar={{ uri: l.avatar_url }}
          key={i}
          title={l.name}
          {...remainingProps}
        />
      ))}
    </ListEl>
  );
};

export { List as default };
