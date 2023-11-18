import React, { useState, createContext } from 'react';
import UseContextExample from './UseContextExample';
export const DataContext = createContext()

function AppCopy() {
    const [data, setData] = useState("Testing Data from AppCopy ");
    return (
        <div>
            <DataContext.Provider value={data}>
                <UseContextExample />
            </DataContext.Provider>
        </div>
    );
}
export default AppCopy;
