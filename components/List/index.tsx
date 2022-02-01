import { ListItems, TaskProperties } from '../../types.d'
import { Item } from '../Item'
import { StyledList } from './styles'

interface ListProps {
    items: ListItems,
    updateTaskProperty(taskId: number, property: TaskProperties, value: any): void
}

export const List = (props: ListProps): JSX.Element => {
    const { items, updateTaskProperty } = props

    const renderList = () => {

        if (items.length !== 0) {
            return (
                <>
                    {items.map((item) => {
                        return (
                            <Item key={item.taskId} {...item}
                                updateTaskProperty={updateTaskProperty}
                            />
                        )
                    })}
                </>
            )
        }
        return (
            <p>Aun no tienes tareas</p>
        )
    }

    return (
        <StyledList>
            {renderList()}
        </StyledList>
    )
}
