import React, { useState } from 'react';
import Display from './Components/Display';
import Keypad from './Components/Keypad';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleInput = (value) => {
    if (value === 'AC') return setInput('');
    if (value === 'DEL') return setInput((prev) => prev.slice(0, -1));
    if (value === '+/-') return setInput((parseFloat(input) * -1).toString());
    if (value === '=') {
      try {
        const expression = input.replace(/×/g, '*').replace(/÷/g, '/');
        setInput(eval(expression).toString());
      } catch {
        setInput('Error');
      }
      return;
    }
    setInput(input + value);
  };  

  return (
    <div className="calculator-container">
      <div className="calculator">
        <Display value={input || '0'} />
        <Keypad onButtonClick={handleInput} />
      </div>
    </div>
  );
};

export default App;