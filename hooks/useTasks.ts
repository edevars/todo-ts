import { ListItems, ItemInterface } from './../types.d';
import { useState, useEffect } from 'react';

export const useTask = () => {
    const LOCAL_STORAGE_NAME = 'tasks'
    const [tasks, setTasks] = useState<ListItems>([])

    useEffect(() => {
        const localStorageTasks: ListItems = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_NAME)!) || [];
        setTasks(localStorageTasks)
    }, [])

    const createTask = (description: string) => {
        const taskId = tasks.length + 1
        const newArrayTasks: ListItems = [...tasks, { taskId, description, checked: false }];
        setTasks(newArrayTasks);
        window.localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(newArrayTasks));
    };

    const removeTask = (id: number) => {
        const localStorageTasks: ListItems = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_NAME)!);

        const deletedFavorites = localStorageTasks.filter((task: ItemInterface) => task.taskId !== id);

        setTasks(deletedFavorites);

        window.localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(deletedFavorites));
    };

    return { tasks, createTask, removeTask }
}