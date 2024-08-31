import React, { useState, useEffect } from 'react';

const Name1 = () => {
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');

  const fullName = firstName + ' ' + lastName;

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
      <div>
        <label>Full Name:</label>
        <input type="text" value={fullName} readOnly />
      </div>
    </div>
  );
}

export default Name1;