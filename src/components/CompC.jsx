import { Context } from "./../ContextApiDemo";

import { useContext } from "react";

const CompC = () => {

    const user = useContext(Context);
    return (
        <>
           <h1>Hello {user.name}, You're a {user.course} Student!</h1>

           {
               user.percentage >= 35 ? <h1>Congratulation..! You Pass.✌</h1> :
                                <h1>Better Luck Next Time, You Failed.😢</h1>


           }

        </>
           
                    
        // ----------------by using consumer----------------------------

        // <Context.Consumer>
        //     {
        //         (user) => {
        //             return (
        //                 <h1>Hello {user.name}, You're a {user.course} Student!</h1>
        //             ) 
                    
        //         }

        //     }
        // </Context.Consumer>
    )
}

export default CompC;