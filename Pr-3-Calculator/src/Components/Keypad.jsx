import React from 'react';
import Button from './Button';
import './Keypad.css';

const buttons = [
  'AC', '+/-', '%', '÷',
  '7', '8', '9', '×',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='
];

const Keypad = ({ onButtonClick }) => (
  <div className="keypad">
    {buttons.map((btn, i) => (
      <Button
        key={i}
        value={btn}
        onClick={() => onButtonClick(btn)}
        className={`btn 
          ${['÷', '×', '-', '+', '='].includes(btn) ? 'orange' : ''}
          ${btn === '0' ? 'zero' : ''}
        `}
      />
    ))}
  </div>
);

export default Keypad;
