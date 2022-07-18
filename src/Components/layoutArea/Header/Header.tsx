import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import Clock from "../../sharedArea/Clock/Clock";
import Logo from "../../sharedArea/Logo/Logo";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header flex-around">
            <Logo/>
			<h1>Todo App</h1>
            {/* <Clock/> */}
            <AuthMenu/>
        </div>
    );
}

export default Header;
