import {useNavigate} from "react-router-dom";
import {useState} from "react";
export function HomePage() {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    return (
        <div>
            This is a home page
            <input type="text"
                value = {username}
                onChange={(e) => {setUsername(e.target.value)}}/ >

                <button onClick={() => {
                navigate("/dashboard/profile", {state : {username}})}}>Go to profile page</button>
        </div>
    )
}