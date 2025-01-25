import { create } from 'zustand';
import { useState } from 'react';
import './App.css';

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (index) => set((state) => ({todos: state.todos.filter((_, i) => i !== index),})),
}));

function App() {
  const { todos, addTodo, removeTodo } = useTodoStore();
  const [newTodo, setNewTodo] = useState('');

  const handleAdd = () => {
    if (!newTodo) return;
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;