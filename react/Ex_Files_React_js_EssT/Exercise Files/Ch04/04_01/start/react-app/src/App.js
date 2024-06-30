import './App.css';
import { useState } from 'react';


function App() {

  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#000000');

  const submit = (e) => {
    e.preventDefault();
    alert(`${title} ${color}`);
    setTitle(''); // clear the input field
    setColor('#000000'); // clear the input field

    console.log('title:', title);
    console.log('color:', color);
  };

  return (
    <form onSubmit={submit}>
      <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      type="text"
      placeholder="color title..."
      />
      <input
      value={color}
      type="color"
      onChange={(e) =>
      setColor(e.target.value)
      }
      />
      <button>ADD</button>
    </form>
  );
}

export default App;