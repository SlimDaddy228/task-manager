import { AxiosError } from 'axios';
import React, { useContext } from 'react';
import { Context } from '../..';
import { createTask } from '../../http/taskApi';
import Form from '../FormTask/FormTask';
import { FormCreateTaskData, CreateTaskInput } from './config';
import './styles.scss';

const isCorrectValue = (label: string, taskExecutionDate: string) => {
    return label.length >= 4 && new Date(taskExecutionDate);
}

const CreateTask = () => {

    const { tasks } = useContext(Context)

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()

        const target = e.target as typeof e.target & CreateTaskInput;
        const label = target.createTask.value
        const taskExecutionDate = target.taskExecution.value

        if (!isCorrectValue(label, taskExecutionDate))
            return alert('Описание имеет меньше 4 символов, или неправильно указана дата!')

        try {
            const taskExecution = new Date(taskExecutionDate).toISOString()
            const query = await createTask(label, taskExecution)
            
            tasks.setData([...query.allTasks])
        } catch (e: unknown) {
            const error = e as AxiosError
            console.log(error.message)
        }
    }

    return (
        <div className='create-task'>
            <Form
                title={`Создание задачи`}
                FormCreateTaskData={FormCreateTaskData}
                buttonLabel={`Создать`}
                onSubmit={onSubmit}
            />
        </div>
    );
};

export default CreateTask;