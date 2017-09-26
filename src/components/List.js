import React from 'react';

const List = (props) => (
  <ul>
    {props.names.map((elem, i) => (
      <li key={i} onClick={()=>(props.onRemove(i))}>{i} ~ {elem}</li>
    ))}
  </ul>
)

export default List;