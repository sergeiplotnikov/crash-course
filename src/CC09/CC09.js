import React, { useState } from 'react';
import { ResetButton, SubmitButton } from './';

export default function CC09() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const updateFirstName = function (e) {
    setFormState({
      firstName: e.target.value,
      lastName: formState.lastName,
      email: formState.email,
    });
  };
  const updateLastName = function (e) {
    setFormState({
      firstName: formState.firstName,
      lastName: e.target.value,
      email: formState.email,
    });
  };
  const updateEmail = function (e) {
    setFormState({
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: e.target.value,
    });
  };
  const clear = function () {
    setFormState({
      firstName: '',
      lastName: '',
      email: '',
    });
  };
  const submit = function () {
    alert('data submitted');
    clear();
  };
  const isDataValid = function() {
    return (formState.firstName && formState.lastName && formState.email);
  }

  console.log('rendering form')

  return (
    <div>
      <div>
        <div>
          First name:{' '}
          <input
            type="text"
            value={formState.firstName}
            onChange={updateFirstName}
          />
        </div>
        <div>
          Last name:{' '}
          <input
            type="text"
            value={formState.lastName}
            onChange={updateLastName}
          />
        </div>
        <div>
          Email:{' '}
          <input type="text" value={formState.email} onChange={updateEmail} />
        </div>
        <SubmitButton
          isInputValid={isDataValid()}
          onClick={submit}
        >
          Submit
        </SubmitButton>
        <ResetButton onClick={clear}>Clear</ResetButton>
      </div>
      <hr />
      <pre>{JSON.stringify(formState, null, 2)}</pre>
      <hr />
      <ul>
        <li>open the console tab below the browser window and observe the messages as you slowly input data</li>
        <li>every key press updates the state of the form</li>
        <li>every state update triggers a re-render of the CC09 component and its children, the 2 buttons</li>
        <li>this is usuablly an acceptable scenarion FOR FORMS unless the frequent re-renders caues the UI to lag</li>
        <li>for every day case this kind of form implementaion is acceptale (the JS could be better though)</li>
      </ul>
    </div>
  );
}