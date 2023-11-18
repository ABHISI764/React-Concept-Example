import React,{useContext, createContext, useState} from 'react'
import { DataContext } from './AppCopy'

function UseContextExample() {
  const data =  useContext(DataContext)
  return (
    <div>
        {data}
    </div>
  )
}

export default UseContextExample