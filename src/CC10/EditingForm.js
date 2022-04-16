import React from 'react';
import { ResetButton, SubmitButton } from './';

export default function EditingForm(props) {
  console.log('rendering editing-form')
  return (
    <div style={{ padding: '8px', border: '1px solid black', margin: '4px' }}>
      <div>
        Company:{' '}
        <input
          type="text"
          value={props.user.company}
          onChange={props.updateCompany}
        />
      </div>
      <div>
        Name:{' '}
        <input
          type="text"
          value={props.user.name}
          onChange={props.updateName}
        />
      </div>
      <div>
        Country:{' '}
        <input
          type="text"
          value={props.user.country}
          onChange={props.updateCountry}
        />
      </div>
      <SubmitButton onClick={props.submit} />
      <ResetButton onClick={props.reset} />
    </div>
  );
}
