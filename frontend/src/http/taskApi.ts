import { $host } from "."

export const createTask = async (label: string, taskExecution: string) => {
    const { data } = await $host.post('/api/tasks', { label, taskExecution })
    return data
}

export const removeTask = async (id: number) => {
    const { data } = await $host.post('/api/tasks/remove', {id})
    return data
}


export const getTasks = async () => {
    const { data } = await $host.get('/api/tasks')
    return data
}