import { useRef } from 'react';

export default function useRefDemo() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Direct DOM access without state re-render
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = '#f0e68c';
  };

  return (
    <div>
      <h2>Level 9: useRef Hook</h2>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={handleFocus} style={{ marginLeft: '10px' }}>
        Focus Input
      </button>
    </div>
  );
}