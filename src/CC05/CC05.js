import React from 'react';

export default function CC05() {
  const myList = ['aaa', 'bbb', 'ccc', 'ddd'];
  const renderListItem = function (item, index) {
    return (
      <li key={item}>
        item at index {index} is {item}
      </li>
    );
  };
  return (
    <div>
      <ul>{myList.map(renderListItem)}</ul>
      <hr />
      <ul>
        <li>
          Rendering array-items as components is very usefull. A lack of
          understadnding of the{' '}
          <a
            href="https://reactjs.org/docs/lists-and-keys.html#keys"
            target="_blank"
          >
            'key'
          </a>{' '}
          prop, will lead to undesired behaviors.
        </li>
      </ul>
    </div>
  );
}
