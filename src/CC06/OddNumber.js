import React from 'react';

export default function OddNumber(props) {
  return (<span style={{padding: '2px'}}>{props.num % 2 == 0 ? '' : props.num}</span>)
};