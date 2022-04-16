import React, { useState } from 'react';
import { UsersTable, EditingForm } from './';

const data = [
  {
    id: 10,
    company: 'Alfreds Futterkiste',
    name: 'Maria Anders',
    country: 'Germany',
  },
  {
    id: 20,
    company: 'Centro comercial Moctezuma',
    name: 'FranciscoChang',
    country: 'Mexico',
  },
  {
    id: 30,
    company: 'Ernst Handel',
    name: 'Roland Mendel',
    country: 'Austria',
  },
  {
    id: 40,
    company: 'Island Trading',
    name: 'Helen Bennett',
    country: 'UK',
  },
  {
    id: 50,
    company: 'Laughing Bacchus Winecellars',
    name: 'Yoshi Tannamuri',
    country: 'Canada',
  },
  {
    id: 60,
    company: 'Magazzini Alimentari Riuniti',
    name: 'Giovanni Rovelli',
    country: 'Italy',
  },
];

export default function CC10() {
  const [usersData, setUsersData] = useState(data);
  const [editedUser, setEditedUser] = useState(null);
 
  const reset = function () {
    setEditedUser(null);
  };
  const submit = function (updatedUser) {
    const updatedUsers = [];
    for (let i = 0; i < usersData.length; i++) {
      if (usersData[i].id != updatedUser.id) updatedUsers.push(usersData[i]);
      else updatedUsers.push(updatedUser);

      setUsersData(updatedUsers);
      setEditedUser(null);
    }
  };
  return (
    <div>
      <div style={{ height: '180px' }}>
        <div style={{ width: editedUser ? '60%' : '100%', float: 'left' }}>
          <UsersTable onClick={setEditedUser} data={usersData} />
        </div>
        {editedUser && (
          <div style={{ width: editedUser ? '40%' : '0%', float: 'right' }}>
            <EditingForm
              user={editedUser}
              reset={reset}
              submit={submit}
            />
          </div>
        )}
      </div>
      <hr />
      <ul>
        <li>now when you type in the editing form, its only the form that is being re-rendered</li>
        <li>EditingForm.js is now using a 'useEffect' react hook. This hook takes a function to run and an array of variables. Whenever a variable in the array changes, the function runs.</li>
        <li>if you comment out the hook call and open the ediging form and then click on another user the form will not reflect the new use selection.</li>
        <li>useEffect in this example, watched for a change of user in props of the editing form and updates the form state to this user</li>
      </ul>
    </div>
  );
}