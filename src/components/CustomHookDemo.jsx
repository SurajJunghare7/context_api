import useCounter from "../hooks/useCounter";

import useCountDown from "../hooks/useCountDown";

const CustomHookDemo = () => {

    const value = useCounter(); 

    const count = useCountDown(30);

    return (
        <div>
            <h1>Custom Hook Example [Counter Hook]</h1>

            <h2>Counter : {value}</h2>


            <h2>OTP will expire in {count}secs</h2>

        </div>
    )
}

export default CustomHookDemo;