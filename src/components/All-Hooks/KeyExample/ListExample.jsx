import React, { useState } from 'react'


function ListExample() {
    const items = ['Apple', 'Banana', 'Cherry', 'Date'];

    return (
        <div>
            <h2>List Example</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListExample