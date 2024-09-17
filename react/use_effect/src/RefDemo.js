import React, { useState, useRef, useEffect } from 'react';

const RefDemo = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(count);

  useEffect(() => {
    // Update the ref with the current count after each render
    prevCountRef.current = count;
  }, [count]);

  const previousCount = prevCountRef.current;

  return (
    <div>
      <h2>useRef Demo</h2>
      <p>Current count: {count}</p>
      <p>Previous count: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default RefDemo;