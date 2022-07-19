import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../../Redux/Store";
import { TaskClear } from "../../../Redux/TasksAppState";
import { logoutAction } from "../../../Redux/UsetAppState";
import "./Logout.css";

function Logout(): JSX.Element {

    const navigate = useNavigate();
    useEffect(() => {
        const res = window.confirm('Are you sure you want to logout?');
        if (res) {
            store.dispatch(logoutAction());
            store.dispatch(TaskClear());
            navigate("/login");
        }
    });

    return (
        <>

        </>
    );
}

export default Logout;
