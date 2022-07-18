import "./EditTodo.css";
import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { TodoModel, TodoPayLoadModel } from "../../../Model/todo";
import axios from "axios";
import notify from "../../../Services/Notyfication";
import globals from "../../../Services/Globals";
import { useNavigate, useParams } from "react-router-dom";
import web from "../../../Services/WepApi";
import store from "../../../Redux/Store";
import { TaskUpdatedAction } from "../../../Redux/TasksAppState";

interface EditTodoProps {

}


function EditTodo(): JSX.Element {




    const navigate = useNavigate();
    const params = useParams();
    const tasksId = +(params.id || 0);

    const [id, setId] = useState<number>(tasksId);
    // read from App state (Global state)
    const [task,setTask] = useState<TodoModel>(store.getState().tasksReducer.tasks.filter(t => t.id === id)[0]);
    // const [origin, setOrigin] = useState<TodoPayLoadModel>({ 'caption': '', 'info': '', 'classification': '', 'dueDate': new Date() })
    const [origin, setOrigin] = useState<TodoPayLoadModel>({ 'caption': task.caption, 'info': task.info, 'classification': task.classification, 'dueDate': task.dueDate });




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

    // step 7 - preaper the hook

    // let defaultValuesObj = { id: 0, title: "", description: "", group: "", when: new Date() };
    let defaultValuesObj = { ...origin };

    const { register, handleSubmit, control, formState: { errors, isDirty, isValid } }
        = useForm<TodoPayLoadModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: yupResolver(schema) });

    const { dirtyFields } = useFormState({ control });

    // step 8 - send to remote as post request
    const yalla = async (todo: TodoPayLoadModel) => {

        web.updateTask(id, todo)
            .then(res => {
                notify.success('Yay new tasks updated');
                navigate('/tasks')
                // update App state (Globals state)
                store.dispatch(TaskUpdatedAction(res.data))
            })
            .catch(err => { notify.error('Oppsy : ' + err.message) })
    }


    return (
        <div className="EditTodo flex-center-col">
            <h1>update Task</h1>
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
                <button className="button-success" disabled={!isDirty}>Add</button>
            </form>
        </div>
    );
}

export default EditTodo;
