import {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    function incrementFunction(){
        setCount(count + 1);
    }
    function decrementFunction(){
        setCount(count - 1);
    }
    return(
        <div>
            <h1>Count value is {count}</h1>
            <button onClick ={incrementFunction}>Increment</button>
            <button onClick={decrementFunction}>Decrement</button>
        </div>
    )
}