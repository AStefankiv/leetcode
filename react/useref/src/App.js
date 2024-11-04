import React, { useRef, useState, useEffect } from 'react';

const App = () => {
  // Example 1: Focus input field
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };

  // Example 2: Counter without re-rendering
  const countRef = useRef(0);
  const [count, setCount] = useState(0);
  const incrementRef = () => {
    countRef.current += 1;
    console.log("Ref count:", countRef.current);
  };
  const incrementState = () => {
    setCount(count + 1);
  };

  // Example 3: Track previous state
  const [name, setName] = useState('');
  const prevNameRef = useRef('');
  useEffect(() => {
    prevNameRef.current = name;
  }, [name]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Focus the Input</h2>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus} style={{ marginLeft: "10px" }}>Focus Input</button>

      <h2>Counter Comparison</h2>
      <p>Ref Counter (no re-render): {countRef.current}</p>
      <button onClick={incrementRef}>Increment Ref Counter</button>

      <p>State Counter (triggers re-render): {count}</p>
      <button onClick={incrementState}>Increment State Counter</button>

      <h2>Track Previous State</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Current Name: {name}</p>
      <p>Previous Name: {prevNameRef.current}</p>
    </div>
  );
};

export default App;
