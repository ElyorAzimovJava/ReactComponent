import {useState} from "react";
import useLocalStorage from "../hooks/useLocalStroage.js";

export default function Login(){
    const [value, setValue] = useState("");
    const [user, setUser] = useLocalStorage();
    function handleSubmit(){
        setUser(value);
    }
    return(
        <div>
            <input type = "text" value = {value} onChange = {(e) => setValue(e.target.value)}/>
            <button onClick = {handleSubmit}>Login</button>
        </div>
    )
}