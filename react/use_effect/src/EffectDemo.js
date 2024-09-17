import React, { useState, useEffect } from 'react';

const EffectDemo = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Name changed to ${name}`);
  }, [name]);

  return (
    <div>
      <h2>Effect Demo</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Your name is: {name}</p>
      <button onClick={() => setCount(count + 1)}>Click me ({count})</button>
    </div>
  );
};

export default EffectDemo;
