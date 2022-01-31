export interface ItemInterface {
    taskId: number,
    description: string,
    checked: boolean,
}

export type ListItems = Array<ItemInterface>