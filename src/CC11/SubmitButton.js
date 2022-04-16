import React from 'react';

export default function ResetButton(props) {
  console.log('rendering submit-button');
  return (
    <button onClick={props.onClick}>Submit</button>
  );
};