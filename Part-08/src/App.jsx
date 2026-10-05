import { useState, useMemo, useCallback } from 'react';

export default function OptimizationDemo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // Expensive calculation memoized
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) {} // Heavy loop
    return num * 2;
  };

  const calcResult = useMemo(() => expensiveCalculation(number), [number]);

  // Function reference memoized
  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <h2>Level 8: Performance Optimization</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br /><br />
      <p>Double of {number} is {calcResult}</p>
      <button onClick={() => setNumber(number + 1)}>Change Number</button>
    </div>
  );
}