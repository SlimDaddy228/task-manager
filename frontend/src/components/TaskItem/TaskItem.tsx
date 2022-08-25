import React from 'react';
import { MdDelete } from 'react-icons/md';
import { ImCheckmark } from 'react-icons/im';
import './styles.scss'

interface Props {
    id: number,
    label: string,
    taskExecution: string,
    isDone: boolean,
    deleteTask: (id: number) => void
}

const TaskItem = ({id, label, taskExecution, isDone, deleteTask}: Props) => {
    return (
        <div className='task-item'>
            <div>
                <span>
                    {label}
                </span>
                <div>
                    {taskExecution}
                </div>
            </div>
            <div className='btn-wrapper'>
                <div className='delete' title='Удалить задачу'>
                    <MdDelete onClick={() => deleteTask(id)} />
                </div>
                <div title='Прошло ли время выполнения'>
                    <ImCheckmark style={{ color: `${isDone ? "green" : 'red'}` }} />
                </div>
            </div>
        </div>
    );
};

export default TaskItem;