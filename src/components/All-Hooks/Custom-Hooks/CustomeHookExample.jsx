import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';

function CustomeHookExample() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>
        {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  )
}

export default CustomeHookExample