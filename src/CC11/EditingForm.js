import React, { useState, useEffect } from 'react';
import { ResetButton, SubmitButton } from './';

export default function EditingForm(props) {
  console.log('rendering editing-form')
  const [user, updateUser] = useState(props.user);
  const switchUser = function() {
    updateUser(props.user);
  }
  useEffect(switchUser, [props.user]);
  const updateCompany = function (e) {
    updateUser({
      id: user.id,
      company: e.target.value,
      name: user.name,
      country: user.country,
    });
  };
  const updateName = function (e) {
    updateUser({
      id: user.id,
      company: user.company,
      name: e.target.value,
      country: user.country,
    });
  };
  const updateCountry = function (e) {
    updateUser({
      id: user.id,
      company: user.company,
      name: user.name,
      country: e.target.value,
    });
  };
  const submit = function() {
    props.submit(user);
  };
  return (
    <div style={{ padding: '8px', border: '1px solid black', margin: '4px' }}>
      <div>
        Company:{' '}
        <input
          type="text"
          value={user.company}
          onChange={updateCompany}
        />
      </div>
      <div>
        Name:{' '}
        <input
          type="text"
          value={user.name}
          onChange={updateName}
        />
      </div>
      <div>
        Country:{' '}
        <input
          type="text"
          value={user.country}
          onChange={updateCountry}
        />
      </div>
      <SubmitButton onClick={submit} />
      <ResetButton onClick={props.reset} />
    </div>
  );
}
