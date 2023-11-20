import React, { useCallback, useState } from 'react'
import Child from './Child';

function UseCallbackExample() {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState([]);
    const increment = () => {
        setCount(count + 1);
    }
    const fun = useCallback( () => {
        console.log("Hello Function")

    },[countTwo])
    return (
        <div>
            <Child countTwo={countTwo} fun={fun}/>
            <button onClick={increment}>counter {count}</button>
        </div>
    )
}
export default UseCallbackExample