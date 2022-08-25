import React, { CSSProperties, useContext, useEffect, useMemo } from 'react';
import TaskBar from './components/TaskBar/TaskBar';
import CreateTask from './components/CreateTask/CreateTask';
import './app.scss';
import { observer } from 'mobx-react';
import { Context } from '.';
import { getTasks } from './http/taskApi';

const App = observer(() => {

    const { tasks: Tasks } = useContext(Context)

    const style = useMemo((): CSSProperties => {
        return (
            Tasks.data.length <= 0 ? {flexDirection: 'column'} : {}
        )
    }, [Tasks.data.length])

    useEffect(() => {
        getTasks().then(tasks => {
            Tasks.setData(tasks)
        }).catch(e => console.log(e))
    }, [])

    return (
        <div className='App' style={style}>
            <TaskBar/>
            <CreateTask/>
            <a href='http://localhost:5000/api/docs#/'>API</a>
        </div>
    );
});

export default App;