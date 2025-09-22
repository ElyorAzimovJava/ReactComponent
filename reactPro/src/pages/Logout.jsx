import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";

export default function Logout(){
    const {setUser} = useContext(UserContext);
    return(
        <div>
            <button onClick={()=>setUser("Guest")}>Logout</button>
        </div>
    )
}