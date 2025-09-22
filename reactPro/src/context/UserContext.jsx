import {useReducer, useState} from "react";
import {createContext} from "react";

const UserContext = createContext();
function userReducer(state, action){
    if(action.type == "login"){
        return action.payload;
    }
    if(action.type == "logout"){
        return action.payload;
    }
}
function UserProvider({children}){
    const [user, dispatch] = useReducer(userReducer, "");

    return (
        <div>
            <UserContext value = {{user, dispatch}} >
                {children}
            </UserContext>
        </div>
    )
}
export {UserContext,UserProvider}