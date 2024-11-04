import React, { useRef, useEffect } from 'react';

const App = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  // Use useEffect to focus on load
  useEffect(() => {
    focusInput(); // Focus the input on initial render
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default App;
