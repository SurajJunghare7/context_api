import { useState, useEffect} from "react";

const useCountDown = (secs) => {
    
    const [countdown, setCountdown] = useState(secs);

    useEffect(() => {
    
        setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);
        
        },[]);
        

    return useCountDown;
}

export default useCountDown;