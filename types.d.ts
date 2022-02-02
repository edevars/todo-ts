export interface ItemInterface {
    taskId: number,
    description: string,
    checked: boolean,
}

export type ListItems = Array<ItemInterface>

export type TaskProperties = 'taskId' | 'description' | 'checked'

export type TaskListType = "completed" | "todo" | "all";
