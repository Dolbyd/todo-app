import axios from "axios";
import { useEffect, useState } from "react";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notyfication";
import web from "../../../Services/WepApi";
import Circle from "../../sharedArea/Circle/Circle";
import "./TodoTotal.css";

function TodoTotal(): JSX.Element {

    const [num, setNum] = useState(store.getState().tasksReducer.tasks.length);

    useEffect(() => {
        if (num === 0) {
            web.countTasks()
                .then(res => {
                    setNum(res.data);
                    notify.success('total' + res.data);
                })
                .catch(err => notify.error(err.message))
        }
        return store.subscribe(() => {
            setNum(store.getState().tasksReducer.tasks.length);
        });
    }, [num])


    return (
        <div className="TodoTotal">
            <Circle num={num}></Circle>
        </div>
    );
}

export default TodoTotal;
function setCount(length: number) {
    throw new Error("Function not implemented.");
}

