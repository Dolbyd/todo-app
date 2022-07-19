import { useEffect, useState } from "react";
import store from "../../../Redux/Store";
import CustomLink from "../../RoutingArea/CustomLink/CustomLink";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {




    const [isLogIn, setIsLogIn] = useState(store.getState().authReducer.user?.token?.length > 0);
    const [email, setEmail] = useState(store.getState().authReducer.user?.email)

    useEffect(() => {
        return store.subscribe(() => {
            setIsLogIn(store.getState().authReducer.token?.length > 0);
            setEmail(store.getState().authReducer.user?.email);
        });
    }, [])

    return (
        <div className="AuthMenu flex-row">
            {
                isLogIn
                    ?
                    <>Hello {email} <CustomLink to="logout">Logout</CustomLink></>
                    :
                    <>Hello Guest  <CustomLink to="login">Login</CustomLink> <CustomLink to="register">Register</CustomLink></>
            }
        </div>
    );
}

export default AuthMenu;
