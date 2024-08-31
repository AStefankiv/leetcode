import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function Form({ firstName, lastName }) {
  const [fullName, setFullName] = useState('');
  useEffect(() => {
    setFullName(firstName + ' ' + lastName);
  }, [firstName, lastName]);
  // ...

  return (
    <div>
      <label>Full Name:</label>
      <input type="text" value={fullName} readOnly />
    </div>
  );
}

const Name = () => {
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');

  return (
    <div>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <Form firstName={firstName} lastName={lastName} />
    </div>
  );
}

export default Name;