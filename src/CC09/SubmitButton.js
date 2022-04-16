import React from 'react';

export default function SubmitButton(props) {
  console.log('rendering submit-button');
  return (
    <button disabled={!props.isInputValid} onClick={props.onClick}>Submit</button>
  );
};