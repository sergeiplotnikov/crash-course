import React, { useState } from 'react';
import { AAA, BBB } from './';

export default function CC08() {
  const [flag, setFlag] = useState(true);
  const flipFlag = function () {
    setFlag(!flag);
  };
  return (
    <div>
      <div style={{marginBottom: '8px'}}>
        <button onClick={flipFlag}>{flag ? 'hide' : 'show'}</button>
      </div>
      {flag && <AAA />}
      <BBB show={flag} />
      <hr />
      <ul style={{ marginTop: '8px'}}>
        <li>
          try incrementing both counters and then hiding and showing the components again
        </li>
        <hr />
        <li>
          <h3>What happens in this example:</h3>
          <ol>
            <li>
              During 1st render of CC08 the value of 'flag' is TRUE since this is the default value. 
            </li>
            <li>When CC08 return function runs, both AAA and BBB are being rendered</li>
            <li>When you click hide, CC08 state changes and this causes a re-render</li>
            <li>During the re-render 'flag && &lt;AAA&gt;' results in AAA being 'unmounted' - the component intance is deleted</li>
            <li>Also during the re-render the new 'flag' value is passed as 'props' to BBB - the change in props causes a re-render in BBB</li>
            <li>BBB re-render results in returning null and not drawing anything - effectively hiding the components on the screen but not killing it</li>
            <li>When you click show, and both AAA and BBB components appear, BBB is the old BBB with its old state so the counter never reset</li>
            <li>When AAA appears again its a completely new AAA</li>
          </ol>
        </li>
      </ul>
    </div>
  );
}
