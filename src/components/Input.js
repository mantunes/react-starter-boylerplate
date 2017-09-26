import React from 'react';

const Input = (props) => (
  <form onSubmit={props.onSubmit} action="#">
    <input placeholder="Add new name" />
    <button type="submit">Add Item</button>
  </form>
)

export default Input;