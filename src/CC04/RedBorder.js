import React from 'react';

export default function RedBorder(props) {
  return (
    <div style={{ border: '4px solid red'}}>
      {props.children}
    </div>
  )
};