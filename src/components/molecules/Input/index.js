import React from 'react';
import PropTypes from 'prop-types';

const Input = props => (
  <form onSubmit={props.onSubmit} action="">
    <input placeholder="Add new name" />
    <button type="submit">Add Item</button>
  </form>
);

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
