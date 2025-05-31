import React from 'react';
import Button from './Button';
import './Keypad.css';

const buttons = [
    'AC', 'DEL', '+/-', '%',
    '÷', '7', '8', '9',
    '×', '4', '5', '6',
    '-', '1', '2', '3',
    '+', '0', '.', '='
];

const Keypad = ({ onButtonClick }) => {
    return (
        <div className="keypad">
            {buttons.map((btn, i) => {
                const btnClass = `
                    btn 
                    ${['÷', '×', '-', '+', '%'].includes(btn) ? 'orange' : ''}
                    ${btn === '=' ? 'green' : ''}
                    ${btn === '0' ? 'zero' : ''}
                `.trim().replace(/\s+/g, ' ');

                return (
                    <Button
                        key={i}
                        value={btn}
                        onClick={() => onButtonClick(btn)}
                        className={btnClass}
                    />
                );
            })}
        </div>
    );
};

export default Keypad;