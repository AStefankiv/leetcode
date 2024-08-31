import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import necessary components from react-router-dom
import Name from './Name';
import Name1 from './Name1';

function App() {
  const handleClick = () => {
    alert("Hello, this is a Chrome extension built with React!");
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/name">Name Page</Link>
              </li>
              <li>
                <Link to="/name1">Name Page 1</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <h1>Welcome to My Home page</h1>
                  <button onClick={handleClick}>Click me</button>
                </>
              } 
            />
            <Route path="/name" element={<Name />} />
            <Route path="/name1" element={<Name1 />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;