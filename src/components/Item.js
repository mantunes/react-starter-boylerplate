import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ onClick, elem }) => {
  const onRemove = () => onClick(elem.id);
  return (
    <li>
      {elem.id} ~ {elem.name}
      <button onClick={onRemove}> X </button>;
    </li>
  );
};

Item.propTypes = {
  elem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Item;
