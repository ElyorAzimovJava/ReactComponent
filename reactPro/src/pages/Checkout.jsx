import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";

export default function Checkout(){
    const {user} = useContext(UserContext);
    return(
        <div>
            Checkout as {user}
        </div>
    )
}