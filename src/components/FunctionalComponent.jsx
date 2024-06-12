import React, { useState } from 'react'

const FunctionalComponent = (props) => {
    const numvalue = parseInt(props.numvalue)
    const [count, setCount] = useState(numvalue);

    const [inputValue, setInputValue] = useState(0);

    const handleInputChange = (event) => {
        setInputValue(Number(event.target.value));
    };

    const increment = () => {
        setCount(count + inputValue);
    };

    const decrement = () => {
        setCount(count - inputValue);
    };

    const containerStyle = {
        backgroundColor: count >= 10 ? 'lightgreen' : 'white',
        padding: '20px',
        borderRadius: '5px'
    };

    return (
        <div style={containerStyle}>
            <h2>This is a Functional Component</h2>
            <p><p>{props.message}</p></p>

            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <input
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a number"
            />

            <button onClick={decrement}>-</button>
        </div>

    )
}

export default FunctionalComponent