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

    return (
        <div>
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