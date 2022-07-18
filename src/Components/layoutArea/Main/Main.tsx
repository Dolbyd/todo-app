import { Outlet } from "react-router-dom";
import About from "../../PageArea/About/About";
import Donate from "../../PageArea/Donate/Donate";
import Routing from "../../RoutingArea/Routing/Routing";
import EmptyView from "../../sharedArea/EmptyView/EmptyView";
import AddTodo from "../../TodoArea/AddTodo/AddTodo";
import DeleteTodo from "../../TodoArea/DeleteTodo/DeleteTodo";
import EditTodo from "../../TodoArea/EditTodo/EditTodo";
import TodoList from "../../TodoArea/TodoList/TodoList";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main ">
            
            <Routing/>
            <Outlet/>

			{/* <TodoList/> */}
            {/* <AddTodo/> */}
            {/* <EditTodo/> */}
            {/* <DeleteTodo/> */}
            {/* <About/> */}
            {/* <Donate to="Dolev" bank={12} brunch={590} account={123456}/> */}
        </div>
    );
}

export default Main;
