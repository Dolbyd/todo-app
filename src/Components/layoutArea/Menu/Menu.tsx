import { Link } from "react-router-dom";
import CustomLink from "../../RoutingArea/CustomLink/CustomLink";
import MenuLink from "../../RoutingArea/MenuLink/MenuLink";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu flex-col-top-center">

            <MenuLink to="home">Home</MenuLink>
            <MenuLink to="tasks">Tasks</MenuLink>
            <MenuLink to="about">about</MenuLink>
            <MenuLink to="donate">Donate</MenuLink>
            {/* <Link to = "home">Home</Link>
            <Link to = "tasks">Tasks</Link>
            <Link to = "about">About</Link>
            <Link to = "donate">Donate</Link> */}
			{/* <a href="/home">Home</a>
			<a href="/tasks">Task</a>
			<a href="/about">About</a>
			<a href="/donate">Donate</a> */}
        </div>
    );
}

export default Menu;
