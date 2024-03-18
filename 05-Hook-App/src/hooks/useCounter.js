import { useState } from "react"

export const useCounter = (inicialCounter = 10)=>{
    
    const [counter, setCounter] = useState(inicialCounter);
    
    const increment = (value = 1 )=>{
        setCounter(counter + value);
    };

    const reset = ()=>{
        setCounter(inicialCounter);
    };

    const decrement = (value = 1)=>{
        setCounter(counter - value);
    };
    
    return{
        counter,
        increment,
        reset,
        decrement,
    };
}