import { useReducer, useState } from "react"
import './App.css';

// const reducer = (state, action) => {
//   if (action.type === 'increment') {
//     return { count: state.count + 1 }
//   }
//   if (action.type === 'decrement') {
//     return { count: state.count - 1 }
//   }
//   throw new Error("Unknown action type")
// }

// const Counter = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0 })

//   return (
//     <>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </>
//   )
// }

// export default Counter;





// Step 1: Define the reducer function
const reducer = (state, action) => {
  console.log("Current State:", state);
  console.log("Action Received:", action);

  if (action.type === 'add') {
    console.log("Adding a new todo with text:", action.payload);
    return [...state, { id: Date.now(), text: action.payload, completed: false }]
  }
  if (action.type === 'toggle') {
    console.log("Toggling todo with id:", action.payload);
    return state.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
  }
  if (action.type === 'remove') {
    console.log("Removing todo with id:", action.payload);
    return state.filter((todo) => todo.id !== action.payload)
  }
  throw new Error("Unknown action type")
};

// Step 2: Create the Todo component
const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, []); // Initial state is an empty array
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim()) {
      console.log("Dispatching ADD action with payload:", text);
      dispatch({ type: "add", payload: text });
      setText("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
            <button onClick={() => dispatch({ type: "toggle", payload: todo.id })}>
              Toggle
            </button>
            <button onClick={() => dispatch({ type: "remove", payload: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;