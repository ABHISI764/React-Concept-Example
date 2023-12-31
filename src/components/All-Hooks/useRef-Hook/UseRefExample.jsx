import React, { useRef, useState } from 'react';

function UseRefExample() {
  const refElement = useRef();
  const [name, setName] = useState("Testing")
  function reset(){
    setName("")
    refElement.current.focus();
  }
  function handelInput(){
    refElement.current.style.color="red"
  }
  return (
    <div>
      <h1>Learning usRef :-  {name}</h1>
      <input ref={refElement} type='text' value={name} onChange={(e)=> setName(e.target.value)} />
      <button onClick={reset}>Reset</button>
      <button onClick={handelInput}>Cange Color</button>
      
    </div>
  );
}

export default UseRefExample;
