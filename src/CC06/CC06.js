import React from 'react';
import { Number, OddNumber } from './';

export default function CC06() {
  const data=[1,2,3,4,5,6,7,8,9,10,11,12];
  const renderNumbers = function(item) {
    return (<Number key={item} num={item} />);
  };
  const renderOddNumbers = function(item) {
    return (<OddNumber key={item} num={item} />)
  };

  return (
    <div>
      <div>
        {data.map(renderNumbers)}
      </div>
      <hr />
      <div>
        {data.map(renderOddNumbers)}
      </div>
      <hr />
    </div>
  )
}