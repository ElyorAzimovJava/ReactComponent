import {Link} from "react-router-dom";

export function Nav() {
    return (
        <div>
            <Link to = "/">Home</Link>
            <Link to = "/dashboard">Dashboard</Link>
        </div>

    )
}