import { useReducer } from "react"

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



const reducer = (state, action) => {
  if (action.type = 'add') {
    return [...state, { id: Date.now(), text: action.payload, completed: false }]
  }
  if (action.type = 'toggle') {
    return state.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
  };
  if (action.type = 'delete') {
    return state.filter((todo) => todo.id !== action.payload)
  }
  throw new Error("Unknown action type")
}

const Todo = () => {
  const []