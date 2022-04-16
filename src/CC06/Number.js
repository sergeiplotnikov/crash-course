import React from 'react';

export default function Number(props) {
  if (props.num % 2 == 0)
    return <span style={{ color: 'red', padding: '2px' }}>{props.num}</span>;
  else
    return <span style={{ color: 'blue', padding: '2px'}}>{props.num}</span>;
}
