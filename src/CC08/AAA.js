import React, { useState } from 'react';

export default function AAA() {
  const [counter, setCounter] = useState(0);
  const increment = function() {
    setCounter(counter + 1);
  };

  return (
    <div style={{ width: '50%', backgroundColor: 'magenta', float: 'left', color: 'white'}}>
      <div>counter: {counter}</div>
      <button onClick={increment}>increment</button>
    </div>
  )
}