// import moment from "moment";
// import { TodoModel } from "../../../Model/todo";
// import "./TodoItem.css";
// import { MdDelete, MdEditNote    } from "react-icons/md";
// import { Link } from "react-router-dom";

// interface TodoItemProps{
//     task: TodoModel;
// }
// function TodoItem(props: TodoItemProps): JSX.Element {
//     return (
//         <div className="TodoItem">
// 			<h2>{props.task.caption}</h2>

//             <div className="card">
//                 <img src="https://cataas.com/cat/gif" alt={props.task.caption} />
//                 <h1>{props.task.classification}</h1>
//                 <p className="price">{moment(props.task.dueDate).format("DD/MM/YYYY")}</p>
//                 {/* <p className="price">{moment(props.task.when).format("hh:mm:ss")}</p> */}
//                 <p className="single-line-only">{props.task.info}</p>
//                 <div >
//                     <Link  to={`delete/${props.task.id}`}>
//                         <MdDelete size={72}/>
//                     </Link> 
//                     <Link to={`update/${props.task.id}`}>
//                         <MdEditNote size={72}/>
//                     </Link>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default TodoItem;

import moment from "moment";
import { TodoModel } from "../../../Model/todo";

import "./TodoItem.css";
import CustomLink from "../../RoutingArea/CustomLink/CustomLink";
import { MdDelete, MdModeEdit } from "react-icons/md";
interface TodoItemProps {
    task: TodoModel;
}
function TodoItem(props: TodoItemProps): JSX.Element {
    return (
        <div className="TodoItem">
            <h2 className="single-line-only">{props.task.caption}</h2>

            <div className="card">
                <img src="https://cataas.com/cat/gif" alt={props.task.caption} />
                <span>{props.task.classification}</span>
                <span className="single-line-only">{props.task.info}</span>
                <span className="date">{moment(props.task.dueDate).format("DD/MM/yyyy")}</span>
                <div className="flex-around">
                    <CustomLink to={`delete/${props.task.id}`}><MdDelete size={42} /></CustomLink>
                    <CustomLink to={`update/${props.task.id}`}><MdModeEdit size={42} /></CustomLink>
                </div>

            </div>
        </div>
    );
}

export default TodoItem;
