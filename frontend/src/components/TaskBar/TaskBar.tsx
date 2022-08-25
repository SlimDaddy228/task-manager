import { observer } from 'mobx-react';
import { useContext, useMemo } from 'react';
import { Context } from '../..';
import TaskItem from '../TaskItem/TaskItem';
import './styles.scss'

const TaskBar = observer(() => {

    const { tasks } = useContext(Context)

    const buildDate = useMemo(() => (taskExecution: string) => {
        const date = new Date(taskExecution)
        return `${date.toDateString()}`
    }, [])

    const isTaskDone = useMemo(() => (taskExecution: string) => {
        const dateA = new Date().getTime();
        const dateB = new Date(taskExecution).getTime();
        return (dateA > dateB)
    }, [])

    return (
        <div className='task-bar'>
            <label>{`Список задач: ${tasks.data.length}`}</label>
            <div className='task-wrapper'>
                {tasks.data.map(({ id, label, taskExecution }) => {
                    return (
                        <TaskItem
                            key={id}
                            id={id}
                            label = {label}
                            taskExecution = {buildDate(taskExecution)}
                            deleteTask = {tasks.removeTaskById}
                            isDone = {isTaskDone(taskExecution)}
                        />
                    )
                })}
            </div>
        </div>
    );
});

export default TaskBar;