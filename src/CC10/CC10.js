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
  const updateCompany = function (e) {
    setEditedUser({
      id: editedUser.id,
      company: e.target.value,
      name: editedUser.name,
      country: editedUser.country,
    });
  };
  const updateName = function (e) {
    setEditedUser({
      id: editedUser.id,
      company: editedUser.company,
      name: e.target.value,
      country: editedUser.country,
    });
  };
  const updateCountry = function (e) {
    setEditedUser({
      id: editedUser.id,
      company: editedUser.company,
      name: editedUser.name,
      country: e.target.value,
    });
  };
  const reset = function () {
    setEditedUser(null);
  };
  const submit = function () {
    const updatedUsers = [];
    for (let i = 0; i < usersData.length; i++) {
      if (usersData[i].id != editedUser.id) updatedUsers.push(usersData[i]);
      else updatedUsers.push(editedUser);

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
              updateCompany={updateCompany}
              updateName={updateName}
              updateCountry={updateCountry}
              reset={reset}
              submit={submit}
            />
          </div>
        )}
      </div>
      <hr />
      <ul>
        <li>in order to edit a row in the table, click it - a form opens</li>
        <li>
          when the form is opened, open the console tab and clear the console
        </li>
        <li>
          now that the console is cleared, go to the form and add a single
          letter to any of the fields
        </li>
        <li>
          you will see that not only is the form-components are re-rendered but also the table and each of its row
        </li>
        <li>
          the reason for that is the fact that when you edit a field you update a state that is on the CC10 components =&gt; CC10 and all of its childred get re-rendered
        </li>
        <li>
          in react, state should be as low, down the component tree, as possible. CC11 reimplements this example but the state edited by the form will be in the form component.
        </li>
      </ul>
    </div>
  );
}
