import React, { useState, useCallback } from 'react'
import './App.css'

const Button = React.memo(function Button({ onClick, label }) {
  console.log(`Rendering Button: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

function App() {
    const [count, setCount] = useState(0);
  
    const increment = useCallback(() => {
      setCount((prevCount) => prevCount + 1);
    }, []);
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <Button onClick={increment} label="Increment" />
      </div>
    );
  }

export default App;