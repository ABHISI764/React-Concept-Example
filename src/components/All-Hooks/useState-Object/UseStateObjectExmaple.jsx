import React, { useState } from 'react'

function UseStateObjectExmaple() {
  const [myObject, setMyObject] = useState({
    myName: "Testing Name",
    myAge : 27,
    degree: "Testing Degree"
  });
  const changeObject = () => {
    console.log({...myObject,myAge:26})
    setMyObject({...myObject})
  }
  return (
    <div>
      <h1>my name is {myObject.myName}</h1>
      <h1>and my age is {myObject.myAge}</h1>
      <h1>and my degree is {myObject.degree}</h1>
      <button onClick={changeObject}>Update</button>
    </div>
  )
}

export default UseStateObjectExmaple