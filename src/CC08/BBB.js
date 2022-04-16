import React, { useState } from 'react';

export default function BBB(props) {
  const [counter, setCounter] = useState(0);
  const increment = function() {
    setCounter(counter + 1);
  };

  if (props.show == false) return null;

  return (
    <div style={{ width: '50%', backgroundColor: 'cyan', float: 'right'}}>
      <div>counter: {counter}</div>
      <button onClick={increment}>increment</button>
    </div>
  )
}