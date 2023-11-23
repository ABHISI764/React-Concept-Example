import React, { useEffect, useState } from 'react'
import axios from 'axios';

function SearchFilterExample() {
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState();
    const [query, setQuery] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUserData(res.data)
            }).catch((error) => {
                console.log("error", error)
                setError(error.message)
            })
    }, [])


    return (
        <div>
            <input type='text' placeholder='Search' onChange={(e) => setQuery(e.target.value)} />
            <div>
                <ul className='list'>
                    {userData.filter((user) => user.name.toLowerCase().includes(query))
                        .map((user) => (<li key={user.id}>{user.id} {user.name}</li>))}
                </ul>
            </div>
            {error !== " " && <h2>{error}</h2>}

            {userData.map((item, index) => (<div key={item.id}>{item.id} : {item.name}</div>))}

        </div>
    )
}

export default SearchFilterExample