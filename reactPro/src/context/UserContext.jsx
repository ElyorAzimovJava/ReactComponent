import {useState} from "react";
import {createContext} from "react";

const UserContext = createContext();
function UserProvider({children}){
    const [user, setUser] = useState("");
    return (
        <div>
            <UserContext value = {{user, setUser}} >
                {children}
            </UserContext>
        </div>
    )
}
export {UserContext,UserProvider}