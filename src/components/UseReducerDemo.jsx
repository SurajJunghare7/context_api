import { useRef } from "react";

const UseRefDemo = () => {

    const paraRef = useRef();

    const inputRef = useRef();


    const readValue = () => {


        // this is a worst way to accessing the element in react
        // const text = document.getElementById("para1").innerText;

        // alert(text);

        // by using useRef
        console.log(paraRef.current.innerText);
        console.log(inputRef.current.value)

        // not a good way idea to use useRef to upadate the data

        // inputRef.current.value = "READING COMPLETE"
    }
    return (
        <div>
            <h1>UseRefDemo</h1>

            <p ref={paraRef}>Some Important Info!</p>

            <input type="text" ref = {inputRef} />

            <button onClick={readValue}>Read Paragraph!</button>
        <form>
            <input type="text" />
            <input type= "submit" />
        </form>
        </div>
    )
}

// import { useReducer } from "react";
  
// const UseReducerDemo = () => {

//     const counterReducer = (state, action) => {

//         switch (action.type) {
//             case "SUB":
//             return state - 1;
            
//             case "ADD":
//             return state + 2;
             
//             case "MUL":
//             return state * 2;
            
//             case "DIV":
//             return state / 2;
            
//             fefault:
//             return state;
//         }

    // }
    
    // const [counter, dispatch] = useReducer(counterReducer, 0);


    // const [Counter, setCounter] = useReducer(counterReducer,0);

    // return  (

    //     <>
    //          <h1>User Reducer Demo [Counter App Using Reducer]</h1>
    //          <button onClick={() => setCounter ({type: "SUB"})}>-</button>

    //          <button onClick={() => setCounter ({type: "DIV"})}>/</button>

    //          <b> {Counter} </b>

    //          <button onClick={() => setCounter ({type: "MULT"})}>+</button>
             
    //          <button onClick={() => setCounter ({type: "ADD"})}>*</button>
    //     </>


    //    )

    // }
    


// export default UseReducerDemo;

export default UseRefDemo;