import { ListItems } from '../../types.d'
import { Item } from '../Item'
import { StyledList } from './styles'


interface ListProps {
    items: ListItems
}

export const List = (props: ListProps): JSX.Element => {
    const { items } = props
    return (
        <StyledList>
            {
                items.map((item) => {
                    return (
                        <Item key={item.taskId} {...item} />
                    )
                })
            }
        </StyledList>
    )
}
