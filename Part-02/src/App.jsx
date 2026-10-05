import { useState } from 'react';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Level 2: Counter App (State)</h2>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>
        Decrement
      </button>
    </div>
  );
}