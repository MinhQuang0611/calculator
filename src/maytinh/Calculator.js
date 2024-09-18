import React, { useState } from 'react';

const Calculator = () => {
    const [display, setDisplay] = useState('0');

    const handleClick = (value) => {
        setDisplay((prev) => {
            if (prev === '0') {
                return value;
            }
            return prev + value;
        });
    };

    const handleClear = () => {
        setDisplay('0');
    };

    const handleDelete = () => {
        setDisplay((prev) => {
            if (prev.length === 1) {
                return '0';
            }
            return prev.slice(0, -1);
        });
    };

    const handleCalculate = () => {
        try {
            setDisplay(eval(display).toString());
        } catch (error) {
            setDisplay('Error');
        }
    };

    return ( <
        div >
        <
        h2 > Calculator < /h2> <
        div > { display } < /div> <
        KeyPad handleClick = { handleClick }
        handleClear = { handleClear }
        handleDelete = { handleDelete }
        handleCalculate = { handleCalculate }
        /> <
        /div>
    );
};

const KeyPad = ({ handleClick, handleClear, handleDelete, handleCalculate }) => {
    const buttons = [
        { value: 'Clear', onClick: handleClear },
        { value: 'Delete', onClick: handleDelete },
        { value: '/', onClick: () => handleClick('/') },
        { value: '7', onClick: () => handleClick('7') },
        { value: '8', onClick: () => handleClick('8') },
        { value: '9', onClick: () => handleClick('9') },
        { value: '*', onClick: () => handleClick('*') },
        { value: '4', onClick: () => handleClick('4') },
        { value: '5', onClick: () => handleClick('5') },
        { value: '6', onClick: () => handleClick('6') },
        { value: '-', onClick: () => handleClick('-') },
        { value: '1', onClick: () => handleClick('1') },
        { value: '2', onClick: () => handleClick('2') },
        { value: '3', onClick: () => handleClick('3') },
        { value: '+', onClick: () => handleClick('+') },
        { value: '0', onClick: () => handleClick('0') },
        { value: '.', onClick: () => handleClick('.') },
        { value: '=', onClick: handleCalculate },
    ];

    return ( <
        div > {
            buttons.map((button, index) => ( <
                button key = { index }
                onClick = { button.onClick } > { button.value } <
                /button>
            ))
        } <
        /div>
    );
};

export default Calculator;