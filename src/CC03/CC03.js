import React from 'react';
import { SumOfThree } from './';

const number_a = 7;

export default function CC03() {
  const number_b = 11;
  return (
    <div>
      <div>
        <div style={{ backgroundColor: 'magenta', padding: '20px' }}>
          <SumOfThree a={number_a} b={number_b} c={13} />
        </div>
      </div>
      <ul>
        <li>
          The named properties used to pass data from the parent component (CC03) to the child component (SumOfThree) are called 'props' - short for 'properties'
        </li>
        <li>
          Inside the child component, props are to be used as read-only variables.
        </li>
      </ul>
    </div>
  );
}
