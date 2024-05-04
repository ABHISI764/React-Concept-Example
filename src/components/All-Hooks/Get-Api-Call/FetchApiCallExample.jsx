import React, { useEffect, useState } from 'react'

function FetchApiCallExample() {
    const [todo, setTodos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response)
            .then((e) => e.json())
            .then((e) => setTodos(e));
    }, [])
    return (
        <div style={{ textAlign: 'center' }}>
            fetch Example
            {
                todo.map((todos, index) => {
                    return <div key={index}>{todos.title}</div>
                })
            }
        </div>
    )
}

export default FetchApiCallExample