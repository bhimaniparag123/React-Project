import React, { useState } from 'react';
import Display from './Components/Display';
import Keypad from './Components/Keypad';
import './App.css';

const App = () => {
    const [input, setInput] = useState('');

    const handleInput = (value) => {
        if (value === 'AC') {
            setInput('');
        } else if (value === 'DEL') {
            setInput((prev) => prev.slice(0, -1));
        } else if (value === '+/-') {
            const number = parseFloat(input);
            setInput(number ? (-number).toString() : '');
        } else if (value === '=') {
            try {
                const expression = input.replace(/×/g, '*').replace(/÷/g, '/');
                const result = eval(expression);
                setInput(result.toString());
            } catch {
                setInput('Error');
            }
        } else {
            setInput((prev) => prev + value);
        }
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