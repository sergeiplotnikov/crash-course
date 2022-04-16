import React from 'react';
import { RedBorder, SplitContainer } from './';

export default function CC04() {
  return (
    <div>
      <RedBorder>
        <div>test</div>
      </RedBorder>
      <SplitContainer>
        <div>child #1</div>
        <div>child #2</div>
      </SplitContainer>
      <ul>
        <li>
          if you check 'SplitContainer' return function, you will see that in
          order to get the 2 child chomponents passed to it, it accesses the
          'childre' property of props. Because there are multiple children
          component 'props.children' is an array
        </li>
        <li>
          in the case of 'RedBorder', 'props.children' is not an array. using
          'props.children[0]' will not work in this case
        </li>
      </ul>
    </div>
  );
}
