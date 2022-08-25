import { AxiosError } from "axios";
import { makeAutoObservable, toJS } from "mobx";
import { getTasks, removeTask } from "../http/taskApi";

interface TaskData {
    id: number,
    label: string,
    taskExecution: string,
    createdAt: string,
    updatedAt: string
}

export class TaskStore {
    _data: TaskData[]

    constructor() {
        this._data = [];
        makeAutoObservable(this)
    }

    setData(data: TaskData[]) {
        this._data = data;
    }

    async removeTaskById(id: number) {
        try {
            await removeTask(id)
            const rebuidlTask = await getTasks()
            this.setData(rebuidlTask)
        } catch (e: unknown) {
            const error = e as AxiosError
            console.log(error.message)
        }
    }

    get data(): TaskData[] {
        return this._data;
    }
}