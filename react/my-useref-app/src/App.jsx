import { create } from 'zustand';
import './App.css';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  // decrement: () => set((state) => ({ count: state.count - 1 })),
  decrement: function() {
    set((state) => ({ count: state.count - 1 }));
  }
}));

function App() {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;