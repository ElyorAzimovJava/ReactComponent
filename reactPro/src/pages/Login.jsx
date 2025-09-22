import {useContext, useState} from "react";
import {UserContext} from "../context/UserContext.jsx";

export default function Login(){
    const [value, setValue] = useState("");
    const { dispatch} = useContext(UserContext);
    function handleSubmit(e){
        e.preventDefault();
        dispatch({type: "login", payload : value});
    }
    return(
        <div>
          <form onSubmit = {handleSubmit}>
              <input type="text" onChange={(e)=> setValue(e.target.value)} />
              <button type="submit">Login</button>
          </form>
        </div>
    )
}