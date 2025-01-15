import { useReducer } from "react"
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

  if (action.type === 'showA') {
    return { state, activePanel: "A" }
  }
  if (action.type === 'showB') {
    return { activePanel: "B" }
  }
  if (action.type === 'showC') {
    return { activePanel: "C" }
  }
  throw new Error("Unknown action type")
};

// Step 2: Component using useReducer
const PanelSwitcher = () => {
  // Step 3: Initialize useReducer with reducer and initial state
  const [state, dispatch] = useReducer(reducer, { activePanel: "A" });

  return (
    <div>
      <h1>Panel Switcher</h1>
      <div>
        <button onClick={() => dispatch({ type: "showA" })}>Show Panel A</button>
        <button onClick={() => dispatch({ type: "showB" })}>Show Panel B</button>
        <button onClick={() => dispatch({ type: "showC" })}>Show Panel C</button>
      </div>

      {/* Display the active panel */}
      <div style={{ marginTop: "20px", border: "1px solid black", padding: "0px" }}>
        {state.activePanel === "A" && <h2>Panel A Content</h2>}
        {state.activePanel === "B" && <h2>Panel B Content</h2>}
        {state.activePanel === "C" && <h2>Panel C Content</h2>}
      </div>
    </div>
  );
};

export default PanelSwitcher;
