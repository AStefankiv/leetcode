import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('');
  const prevValueRef = useRef('');
  
  const handleInputChange = (e) => {
    prevValueRef.current = value;
    setValue(e.target.value);
    
    console.log('value:', value);
    console.log('e.target:', e.target);
    console.log('e.target.value:', e.target.value);
  }

  return (
      <div style={{ padding: "20px" }}>
        <h1>React App with useRef</h1>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Type something..."
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <br />
        <p>Current Value: {value}</p>
        <p>Previous Value: {prevValueRef.current}</p>
      </div>
  )
}

export default App;