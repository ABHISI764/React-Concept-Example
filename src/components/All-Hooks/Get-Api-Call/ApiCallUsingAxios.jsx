import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApiCallUsingAxios() {
    const [todo, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                setTodos(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{textAlign:'center'}}>
            {todo.length > 0 ? (
                todo.map((item, index) => (
                    <div key={index}>{item.title}</div>
                ))
            ) : (
                <div>No todos found.</div>
            )}
        </div>
    );
}
export default ApiCallUsingAxios;
