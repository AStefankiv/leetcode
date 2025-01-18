import { useRef, useEffect } from 'react'
import './App.css'

function App() {
  const inputRef = useRef('hey');
  
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
      <div style={{ padding: "20px" }}>
        <h1>React App with useRef</h1>
        <input
          ref={inputRef}
          type="text"
          placeholder="Click the button to focus"
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <br />
        <button onClick={focusInput} style={{ padding: "10px", fontSize: "16px", marginTop: 10 }}>
          Focus Input
        </button>
      </div>
  )
}

export default App