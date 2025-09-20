import {Link, Outlet} from "react-router-dom";

export default function Dashboard(){
    return (
        <div>
            <ul>
                {"  "}
                <li>
                    <Link to = "profile">Profile</Link>
                </li>
                <li>
                    {"  "}
                    <Link to ="setting">Setting</Link>
                </li>
            </ul>
            <Outlet/>
            This is a dashboard page
        </div>
    )
}