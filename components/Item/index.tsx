import { useState } from 'react'
import { ItemInterface, TaskProperties } from '../../types'
import { StyledItem } from './styles'

interface TaskFunctions {
    calculatePendingTasks(): void,
    updateTaskProperty(taskId: number, property: TaskProperties, value: any): void 
}

type ItemProps = ItemInterface & TaskFunctions

export const Item = (props: ItemProps): JSX.Element => {
    const { taskId, description, checked, calculatePendingTasks, updateTaskProperty } = props
    const [isChecked, setChecked] = useState(checked)

    const handleCheckBox = () => {
        calculatePendingTasks()
        updateTaskProperty(taskId, 'checked', !isChecked)
        setChecked(!isChecked)
    }

    return (
        <StyledItem>
            <input type="checkbox" checked={isChecked} onChange={handleCheckBox} />
            <p>{description}</p>
        </StyledItem>
    )
}