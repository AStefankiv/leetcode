import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(1);
  // const [count, setCount] = useState(0);

  // Expensive calculation
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    const computeFactorial = (n) => (n <= 1 ? 1 : n * computeFactorial(n - 1));
    return computeFactorial(number);
  }, [number]);

  return (
    <div>
      <h1>Factorial of {number}: {factorial}</h1>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setNumber(number - 1)}>Decrease Number</button>

      {/* <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button> */}
    </div>
  );
}

export default App;