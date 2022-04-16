import React from 'react';

export default function SumOfThree(props) {
  return (
    <div style={{ backgroundColor: 'cyan', padding: '4px'}}>
      <span>{props.a}</span>
      <span> + {props.b}</span>
      <span> + {props.c}</span>
      <span> = {props.a + props.b + props.c}</span>
    </div>
  )
};