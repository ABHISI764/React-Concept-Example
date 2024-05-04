import React from "react"
const ButtonCount = ({ incrementCount }) => {
    console.log("inside ButtonCount")
    return (
        <button onClick={incrementCount}>Click Me</button>
    )
}

export default React.memo(ButtonCount)