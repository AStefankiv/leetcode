import { useState, useRef, useEffect } from 'react';
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [clickCount, setClickCount] = useState<number>(0);
  const [gameRunning, setGameRunning] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    setClickCount(0);
    setTimeLeft(5);
    setGameRunning(true);

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setGameRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleClick = () => {
    if (gameRunning) setClickCount(prev => prev + 1)
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
      <div>
        <h1>Click Speed Test Game</h1>
      </div>
  )
}

export default App
