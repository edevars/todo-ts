import { createTaskInLocalStorage, deleteTaskInLocalStorage, updateTaskInLocalStorage, readTasks } from './../utils/localStorage';
import { ListItems, TaskProperties } from './../types.d';
import { useState, useEffect } from 'react';

export const useTask = () => {
    const [tasks, setTasks] = useState<ListItems>([])

    useEffect(() => {
        setTasks(readTasks())
    }, [])


    const createTask = (description: string) => {
        const withCreatedTask = createTaskInLocalStorage(description)
        setTasks([...withCreatedTask])
    }

    const deleteTask = (taskId: number) => {
        const withDeletedTask = deleteTaskInLocalStorage(taskId)
        setTasks([...withDeletedTask])
    }

    const updateTaskProperty = (taskId: number, property: TaskProperties, value: any) => {
        const withUpdatedTask = updateTaskInLocalStorage(taskId, property, value)
        setTasks([...withUpdatedTask])
    }


    return { tasks, createTask, deleteTask, updateTaskProperty }
}