import React, { useState } from 'react'

const FunctionalComponent = (props) => {
    const numvalue = parseInt(props.numvalue)
    const [count, setCount] = useState(numvalue);

    return (
        <div>
            <h2>This is a Functional Component</h2>
            <p><p>{props.message}</p></p>

            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>

    )
}

export default FunctionalComponent