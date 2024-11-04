import React, { useRef, useEffect } from 'react';


const App = () => {
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        console.log("Clicked outside dropdown");
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return <div ref={dropdownRef}>Dropdown Menu</div>;
  
};  
  

export default App;