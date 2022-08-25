import { FormCreateTask } from "../FormTask/FormTask";

export enum CreateTaskInputId {
    createTask = 'createTask',
    taskExecution = 'taskExecution'
}

export interface CreateTaskInput {
    [CreateTaskInputId.createTask]: { value: string },
    [CreateTaskInputId.taskExecution]: { value: string },
}

export const FormCreateTaskData: FormCreateTask[] = [
    {
        id: CreateTaskInputId.createTask,
        label: 'Название задачи',
        placeholder: 'Выполнить тестовое задание'
    },
    {
        id: CreateTaskInputId.taskExecution,
        label: 'Дата выполнения задачи',
        type: 'date'
    },
]
