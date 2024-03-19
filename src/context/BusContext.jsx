import React, { createContext, useState } from "react";

export const BusContext = createContext(null);

export const ContextProvider = (props) => {
    const [number, setNumber] = useState(0);
    const [selectedCity, setCity] = useState('*');
    const [busNumber, setBusnumber] = useState(0);
    const [index, setIndex] = useState(-1);
    return <BusContext.Provider value={{number, setNumber, selectedCity, setCity, busNumber, setBusnumber, index, setIndex}}>
        {props.children}
    </BusContext.Provider>
}