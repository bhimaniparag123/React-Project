import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 10);
  const decrement = () => {
    if (count === 0) {
      alert('Counter is already at zero!');
    } else {
      setCount(prev => prev - 1);
    }
  };
  const reset = () => setCount(0);
  const formatted = count.toString().padStart(1, '0');

  return (
    <div className="counter">
      <div className="glass-card">
        <h1 className="heading">Counter</h1>
        <div className="counter-display">{formatted}</div>
        <p className="step-text">+10/−1</p>
        <div className="btn-group">
          <button className="btn neon red" onClick={decrement}>−</button>
          <button className="btn neon blue" onClick={reset}>⟳</button>
          <button className="btn neon green" onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;