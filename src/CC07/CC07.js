import React, { useState } from 'react';

export default function CC07() {
  const [state, setState] = useState(0);
  // code above is short for the following 3 lines - javascritp array destructuring
  /*
      const result = useState(0);
      const state = result[0];
      const setState = result[1];
  */
  const incrementValue = function () {
    setState(state + 1);
  };

  return (
    <div>
      <div>current values is: {state}</div>
      <div>
        <button onClick={incrementValue}>increment</button>
      </div>
      <hr />
      <ul>
        <li>the 'state' variable (the left one) is used as read-only.</li>
        <li>to update the 'state' variable you pass the new value to the 'setState' function (the right one)</li>
        <li>'useState' is whats called a 'react hook'</li>
        <li>
          react hooks were introduced in v16.8 =&gt; they're optional and you
          can acheive the same result with hooks
        </li>
        <li>
          the parameter passed to the hook call (0) is the default state for the hook - in the case of useState only.
          </li>
          <li>
            only way to reset the counter is to refresh the page (see arrouw around browser box)
            </li>
        <li>
          hooks rules:
          <ol>
            <li>a hooks name always begins with 'use' =&gt; you cannot give your functions names that start with 'use'</li>
            <li>hooks cannot be called conditionally. for example you cant call a hook from inside 'if' block (uder condition) - calling a hook in this example is 'useState(0)'</li>
            <li>hooks can only be called inside functional components - the other type of component is a 'class'</li>
          </ol>
        </li>
      </ul>
    </div>
  );
}
