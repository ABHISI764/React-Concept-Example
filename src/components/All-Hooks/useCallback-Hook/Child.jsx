import React,{memo} from 'react'

function Child({countTwo}) {
    console.log("Child Component render..");
  return (
    <div>
        <h1>Child Component</h1>
    </div>
  )
}

export default memo(Child)