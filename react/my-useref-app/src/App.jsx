import { useState, useCallback} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const handleIncrement = useCallback(() => {
    setCount(count + 1)
  }, [count]);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder='Type something...'
      />
    </div>
  )
}

export default App;