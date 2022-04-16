import React from 'react';

export default function UsersTable(props) {
  console.log('rendering users-table');
  const renderTableRows = function (item) {
    console.log('rendering table-row');
    const runOnClick = function () {
      props.onClick(item);
    };
    return (
      <tr key={item.id} onClick={runOnClick}>
        <td>{item.company}</td>
        <td>{item.name}</td>
        <td>{item.country}</td>
      </tr>
    );
  };

  return (
    <table border="1" style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Company</th>
          <th>Name</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>{props.data.map(renderTableRows)}</tbody>
    </table>
  );
}
