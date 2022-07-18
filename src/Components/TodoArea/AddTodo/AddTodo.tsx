import "./AddTodo.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TodoModel, TodoPayLoadModel } from "../../../Model/todo";

import notify from "../../../Services/Notyfication";

import { useNavigate } from "react-router-dom";
import web from "../../../Services/WepApi";
import store from "../../../Redux/Store";
import { TaskAddedAction } from "../../../Redux/TasksAppState";

function AddTodo(): JSX.Element {

    const navigate = useNavigate();




    // step 6 - manage the schema
    const schema = yup.object().shape({
        caption:
            yup.string()
                .required("caption is required"),
        info:
            yup.string()
                .required("info is required"),
        classification:
            yup.string()
                .required("classification is required"),
        dueDate:
            yup.date()
                .min(new Date(), 'Umm... past due date? come on!')
                .default(new Date())
                .typeError("You must specify a dueDate")
                .required("dueDate is required")
                .nullable().default(() => new Date()),
    });

    // step 7 - useForm for the rescue
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<TodoPayLoadModel>({ mode: "all", resolver: yupResolver(schema) });

    // step 8 - send to remote as post request
    const yalla = async (todo: TodoPayLoadModel) => {

        web.addTask(todo)
            .then(res => {
                notify.success('Yay new tasks created')
                navigate('/tasks')
                // update App state (Global State)
                store.dispatch(TaskAddedAction(res.data))
            })
            .catch(err => {
                notify.error('Oppsy : ' + err.message);
                navigate('/tasks')
            })
    }




    return (
        <div className="AddTodo flex-center-col ">
            <h1>Add Task</h1>
            {/* step 9 - handelSubmit */}
            <form onSubmit={handleSubmit(yalla)} className="flex-center-col box">
                <label htmlFor="caption">Caption</label>
                <input {...register('caption')} type="text" placeholder="caption" id="caption" />
                <span>{errors.caption?.message}</span>
                <label htmlFor="info">Info</label>
                <input {...register('info')} type="text" placeholder="info" id="info" />
                <span>{errors.info?.message}</span>
                <label htmlFor="classification">classification</label>
                <input {...register('classification')} type="text" placeholder="classification" id="classification" />
                <span>{errors.classification?.message}</span>
                <label htmlFor="dueDate">DueDate</label>
                <input {...register('dueDate')} type="datetime-local" placeholder="dueDate" id="dueDate" />
                <span>{errors.dueDate?.message}</span>
                <button className="button-success"disabled={!isValid}>Add</button>
            </form>
        </div>
    );
}

export default AddTodo;
