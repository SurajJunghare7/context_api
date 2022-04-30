import { useEffect, useState } from "react";
import CustomHookDemo from "../components/CustomHookDemo";

const useCounter = () => {

const [counter, setCounter] = useState(1);

useEffect(() => {
    
setInterval(() => {
    setCounter(prev => prev + 1);
}, 1000);

},[]);

    return counter;
}

export default CustomHookDemo;