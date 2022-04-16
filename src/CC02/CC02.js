import React from 'react';
import { CC02_AAA, CC02_BBB } from './';

export default function CC02() {
  return (
    <div
      style={{ backgroundColor: 'magenta', height: '100px', padding: '20px' }}
    >
      <h3>This is CC02</h3>
      <CC02_AAA />
      <CC02_BBB />
    </div>
  );
}
