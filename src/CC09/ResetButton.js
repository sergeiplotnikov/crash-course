import React from 'react';

export default function ResetButton(props) {
  console.log('rendering reset-button');
  return (
    <button onClick={props.onClick}>Reset</button>
  );
};