import React, { useState } from 'react'

function KeyExample() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Build a project' },
        { id: 3, text: 'Deploy to production' }
    ]);
    const handelToDelete = (idToDelete) => {
        console.log("id testing", idToDelete)
        setTodos(prevtodos => prevtodos.filter(item=> item.id !== idToDelete))
    }
    return (
        <div>
            {
                todos.map((item) => (
                    <div key={item.id}>{item.id}:{item.text} 
                    <button onClick={()=>handelToDelete(item.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default KeyExample