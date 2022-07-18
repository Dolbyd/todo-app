import { Link } from "react-router-dom";
import CustomLink from "../../RoutingArea/CustomLink/CustomLink";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu flex-col-top-center">

            <CustomLink to="home">Home</CustomLink>
            <CustomLink to="tasks">Tasks</CustomLink>
            <CustomLink to="about">about</CustomLink>
            <CustomLink to="donate">Donate</CustomLink>
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
