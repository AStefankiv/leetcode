import './App.css';

function App() {
  const handleClick = () => {
    alert("Hello, this is a Chrome extension built with React!");
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Home page</h1>
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;