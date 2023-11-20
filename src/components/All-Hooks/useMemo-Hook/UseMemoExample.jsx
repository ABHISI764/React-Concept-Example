import React, { useMemo, useState } from 'react'

function UseMemoExample() {
    const [counterOne, setcounterOne] = useState(0);
    const [counterTwo, setcounterTwo] = useState(0);

    const counterOneValue = () => {
        setcounterOne(counterOne + 1)
    }
    const counterTwoValue = () => {
        setcounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        console.log("is even calling")
        let i = 0;
        while (i < 2000000000) i++;
        return counterOne % 2 === 0;

    }, [counterOne])


    return (
        <div>
            <h1>{isEven ? "even" : "odd"}</h1>
            <div>Value: {counterOne}
                <button onClick={counterOneValue}>Counter One</button>
            </div>
            <div>Value: {counterTwo}
                <button onClick={counterTwoValue}>Counter Two</button>
            </div>
        </div>
    )
}

export default UseMemoExample;