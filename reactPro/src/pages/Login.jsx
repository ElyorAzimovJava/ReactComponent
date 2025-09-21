import {useContext, useState} from "react";
import {userContext} from "../App.jsx";

export default function Login(){
    const [value, setValue] = useState("");
    const {user, setUser} = useContext(userContext);
    function handleSubmit(e){
        e.preventDefault();
        setUser(value);
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