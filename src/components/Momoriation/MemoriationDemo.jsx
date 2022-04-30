
import A from "./A";

import { useState, useCallback, useMemo } from "react";


const MemoriationDemo = () => {

    const [value1, setValue] = useState(1);

    const [value2, setValue2] = useState(2);

    console.log("I'm parent")

    // const numbers = [1, 2, 3, 4, 5];

    // momoize the reference type values using useMemo hook
    const numbers = useMemo(() => [1, 2, 3, 4, 5], []);
    
    // momoize the function using useCallback hook
       const test = useCallback(() => {
        alert("Hello");
    },[]);
    
    return (
        <div>
            <h1>Memoriation Demo</h1>

            <h2>Value1 = {value1}</h2>

            <button onClick={() => setValue(value => value + 1)}>Change Value</button>

            <button onClick={() => setValue2(value2 => value2 + 1)}>Change Value2</button>
           
            <A value2={value2} test = {test} numbers = {numbers} />
        </div>
    )
}

export default MemoriationDemo; 