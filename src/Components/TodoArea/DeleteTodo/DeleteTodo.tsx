import "./DeleteTodo.css";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import notify from "../../../Services/Notyfication";
import web from "../../../Services/WepApi";
import store from "../../../Redux/Store";
import { TaskDeletedAction } from "../../../Redux/TasksAppState";

function DeleteTodo(): JSX.Element {

    const navigate = useNavigate();
    const params = useParams();
    const tasksId = +(params.id || 0);

    const [id, setId] = useState<number>(tasksId);

    const no = ()=>{
        navigate('/tasks')
    }

    const yes = ()=>{
        web.deleteTask(id)
        .then(res=>{
            notify.success('yayyy deleted successfully');
            navigate('/tasks')
            /// update App state (Globals state)
            store.dispatch(TaskDeletedAction(id))
        })
        .catch(err=>{
            notify.error(err.manage);
            navigate('/tasks');
        })
        
    }

    return (
        <div className="DeleteTodo flex-center-col">
            <h1>Delete task</h1>

            <h3>Are you sure you wont to delete task #{id}?</h3>
            <div className="flex-row">
                <button className="button-danger" onClick={yes}>YES</button> 

                <button className="button"onClick={no}>NO</button>

            </div>


        </div>
    );
}

export default DeleteTodo;
