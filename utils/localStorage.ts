import { TaskProperties } from './../types.d'
import { ListItems, ItemInterface } from '../types'

const LOCAL_STORAGE_NAME = 'tasks'

export const readTasks = () =>
  JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_NAME)!) || []

export const createTaskInLocalStorage = (description: string): ListItems => {
  const tasks = readTasks()
  const taskId = tasks.length + 1
  const newArrayTasks: ListItems = [
    ...tasks,
    { taskId, description, checked: false },
  ]
  window.localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(newArrayTasks))
  return newArrayTasks
}

export const deleteTaskInLocalStorage = (taskId: number): ListItems => {
  const tasks = readTasks()
  const newArrayTasks = tasks.filter(
    (task: ItemInterface) => task.taskId !== taskId
  )
  window.localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(newArrayTasks))
  return newArrayTasks
}

export const updateTaskInLocalStorage = (
  taskId: number,
  property: TaskProperties,
  value: any
): ListItems => {
  const tasks = readTasks()
  const index = taskId - 1
  const editedTaskArray = [...tasks]
  const editedTask = { ...editedTaskArray[index], [property]: value }
  editedTaskArray[index] = editedTask
  window.localStorage.setItem(
    LOCAL_STORAGE_NAME,
    JSON.stringify(editedTaskArray)
  )
  return editedTaskArray
}
