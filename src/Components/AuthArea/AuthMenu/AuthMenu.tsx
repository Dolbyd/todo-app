import { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {

    const [isLogIn, setIsLogIn] = useState(false)

    return (
        <div className="AuthMenu">
            {
                isLogIn
                    ?
                    <>Hello Dolev <Link className = "link" to="logout">Logout</Link></>
                    :
                    <>Hello Guest <Link className = "link" to=" register"> Register</Link><Link className = "link"  to=" login">  Login</Link></>
            }
        </div>
    );
}

export default AuthMenu;
