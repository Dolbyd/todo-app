import Circle from "../../sharedArea/Circle/Circle";
import SocialMedia from "../../sharedArea/SocialMedia/SocialMedia";
import TodoTotal from "../../TodoArea/TodoTotal/TodoTotal";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer flex-around">
            <SocialMedia />
            <h2>All right reserved &copy; to Dolbyd </h2>
            <TodoTotal/>
        </div>
    );
}

export default Footer;
