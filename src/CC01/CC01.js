import React from 'react';

export default function CC01() {
  return (
    <div>
      <h3>Simplest component ever</h3>
      <ul>
        <li>CC01 is a JS function.</li>
        <li>CC01 is also a react 'component'.</li>
        <li>
          Function declaration is not the only way to create a react component.
          Components that are functions are called 'functional componenets'.
        </li>
        <li>
          CC01 returns{' '}
          <a
            target="_blank"
            href="https://reactjs.org/docs/introducing-jsx.html"
          >
            JSX
          </a>
          .
        </li>
      </ul>
      <hr />
      <h3>when done, switch to another example by going to the 'src/index.js' file and update line #16 from '&lt;CC01 /&gt;' to '&lt;CC02 /&gt;' and so on...</h3>
    </div>
  );
}
