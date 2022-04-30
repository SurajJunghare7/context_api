import React from "react";

const A = ({ value2, test, numbers }) => {


    console.log("I'm A");

    return (
        <div> 
            <h1>I'm Component A</h1>

            <h2>Value2 = {value2} </h2>

            <h2>Numbers = {numbers}</h2>

            <button onClick={test}> Call Parent function </button>

        </div>
    )  
}

export default React.memo (A);