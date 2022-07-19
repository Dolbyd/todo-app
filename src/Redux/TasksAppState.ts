import { TodoModel } from "../Model/todo";

// Step 1 - Create AppState and manage the collection once and in a centralize place
export class TasksAppState {
    public tasks: TodoModel[] = [];
}

// Step 2 - Define all possible action for your application state
export enum TasksActionType {
    TasksDownloaded = "TasksDownloaded",
    TaskAdded = "TaskAdded",
    TaskUpdated = "TaskUpdated",
    TaskDeleted = "TaskDeleted",
    TaskClear = "TaskClear"
}

// Step 3 - Define Action Interface to describe actionAction & payload if needed
export interface TaskAction {
    type: TasksActionType;
    payload?: any;
}

// Step 4 - Export Action Creators functions that gets payload and return relevant Action
export function TasksDownloadedAction(Tasks: TodoModel[]): TaskAction {
    return { type: TasksActionType.TasksDownloaded, payload: Tasks };
}

export function TaskAddedAction(Task: TodoModel): TaskAction {
    return { type: TasksActionType.TaskAdded, payload: Task };
}

export function TaskUpdatedAction(Task: TodoModel): TaskAction {
    return { type: TasksActionType.TaskUpdated, payload: Task };
}

export function TaskDeletedAction(id: number): TaskAction {
    return { type: TasksActionType.TaskDeleted, payload: id };
}

export function TaskClear(): TaskAction {
    return { type: TasksActionType.TaskDeleted };
}

// Step 5 - Reducer function perform the required action
export function tasksReducer(currentState: TasksAppState = new TasksAppState(), action: TaskAction): TasksAppState {


    const newState = { ...currentState } //Spread Operator

    switch (action.type) {
        case TasksActionType.TasksDownloaded:
            newState.tasks = action.payload;
            break;
        case TasksActionType.TaskAdded:
            newState.tasks.push(action.payload);
            break;
        case TasksActionType.TaskUpdated:
            const idx = newState.tasks.findIndex(t => t.id === action.payload.id);
            newState.tasks[idx] = action.payload;
            break
        case TasksActionType.TaskDeleted:
            newState.tasks = newState.tasks.filter(t => t.id !== action.payload);
            break
        case TasksActionType.TaskClear:
            newState.tasks = [];
            break
    }
    return newState;

}