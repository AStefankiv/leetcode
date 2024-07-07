import React, { useState } from 'react';
import './ExtensionApp.css';

function ExtensionApp() {
  
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="ExtensionApp">
      <header className="ExtensionApp-header">
        <h1>Chrome extension</h1>
        <p>Count: {count}</p>
        <div className="button-container">
        <button onClick={increment}>Increment +</button>
        <button onClick={decrement}>Decrement -</button>
        </div>
      </header>
    </div>
  );
}

export default ExtensionApp;