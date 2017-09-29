import React from 'react';
import PropTypes from 'prop-types';

import Item from './../../atoms/Item/index';

const List = props => (
  <ul>
    {props.names.map(elem => (
      <Item key={elem.id} onClick={props.onRemove} elem={elem} />
    ))}
  </ul>
);

List.propTypes = {
  names: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onRemove: PropTypes.func.isRequired,
};

export default List;
