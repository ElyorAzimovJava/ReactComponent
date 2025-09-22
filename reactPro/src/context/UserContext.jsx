import {useReducer, useState} from "react";
import {createContext} from "react";

const UserContext = createContext();
function userReducer(state, action){
    if(action.type == "login"){
        return {...state, user: action.payload}
    }
    if(action.type == "logout"){
        return {...state, user: action.payload}
    }
}
function UserProvider({children}){
    const [state, dispatch] = useReducer(userReducer, {user: null});

    return (
        <div>
            <UserContext value = {{...state, dispatch}} >
                {children}
            </UserContext>
        </div>
    )
}
export {UserContext,UserProvider}