import React, { useEffect, useState } from 'react'
import axios from 'axios';

function UseEffectExample() {
    const [userData, setUserData] = useState([]);
    const [error,setError] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUserData(res.data)
            }).catch((error)=>{
                console.log("error",error)
                setError(error.message)
            })
    }, [])

    return (
        <div>
            {error !== " " && <h2>{error}</h2>}
            {userData.map((item, index) => (
                <div>
                    {item.id} : {item.name}
                </div>
            ))}
        </div>
    )
}

export default UseEffectExample