import { useReducer } from "react"
import './App.css'

const reducer = (state, action) => {
  // switch (action.type) {
  //   case 'increment':
  //     return { count: state.count + 1 }
  //   case 'decrement':
  //     return { count: state.count - 1 }
  //   default:
  //     throw new Error("Unknown action type")
  // }
  if (action.type === 'increment') {
    return { count: state.count + 1 }
  }
  if (action.type === 'decrement') {
    return { count: state.count - 1 }
  }
  throw new Error("Unknown action type")
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </>
  )
}

export default Counter;