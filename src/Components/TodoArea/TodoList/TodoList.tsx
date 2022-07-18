
import { useEffect, useState } from "react";
import { TodoModel } from "../../../Model/todo";

import notify from "../../../Services/Notyfication";
import EmptyView from "../../sharedArea/EmptyView/EmptyView";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import web from "../../../Services/WepApi";
import store from "../../../Redux/Store";
import { TasksDownloadedAction } from "../../../Redux/TasksAppState";

function TodoList(): JSX.Element {

    const [tasks, setTasks] = useState<TodoModel[]>(store.getState().tasksReducer.tasks);

    useEffect(() => {
        if (store.getState().tasksReducer.tasks.length === 0) {
            web.getAllTasks()
                .then((res) => {
                    notify.success("yay got my tasks")
                    // update component state
                    setTasks(res.data);
                    // update App state (Global state)
                    store.dispatch(TasksDownloadedAction(tasks));
                })
                .catch((err) => {
                    notify.error(err.message);
                });
        }
    }, [tasks]);

    return (
        <div className="TodoList flex-center-col">
            <h2>todo list</h2>
            <Link className="link" to={"add"}><FaPlus size={72} /></Link>

            {/* {tasks.map(t=><p key={t.id}>{t.title}</p>)} */}
            <div className="flex-row-non-wrap-list">
                {
                    (tasks.length > 0)
                        ?
                        tasks.map(t => <TodoItem key={t.id} task={t} />)
                        :
                        <EmptyView msg="No tasks for you" />
                }
            </div>

        </div>
    );
}

export default TodoList;
