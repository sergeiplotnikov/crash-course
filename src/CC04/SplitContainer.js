import React from 'react';

const leftStyle = { width: '50%', float: 'left', backgroundColor: 'magenta', color: 'white'};
const rightStyle = { width: '50%', float: 'right', backgroundColor: 'cyan', color: 'black'};

export default function SplitContainer(props) {
  return (
    <div style={{padding: '6px'}}>
      <div style={leftStyle}>{props.children[0]}</div>
      <div style={rightStyle}>{props.children[1]}</div>
    </div>
  );
}
