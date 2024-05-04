import React,{useEffect, useState,useCallback} from 'react'
import ButtonCount from './ButtonCount'

function App3() {
    const [count,setCount] = useState(0)
    const incrementCount = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    },[])
    useEffect(()=>{
        console.log("inside useEffect")
    },[incrementCount])

  return (
    <div>
        <h1>{count}</h1>
        <ButtonCount incrementCount={incrementCount}/>
    </div>
  )
}

export default App3