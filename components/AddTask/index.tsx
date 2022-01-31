import { SyntheticEvent, useState } from "react"
import { StyledForm } from "./styles"

interface AddTaskProps {
    createTask(description: string): void
}

export const AddTask = (props: AddTaskProps): JSX.Element => {
    const [description, setDescription] = useState('')
    const { createTask } = props

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault()
        createTask(description)
    }

    return (
        <StyledForm action="onSubmit" onSubmit={handleSubmit}>
            <button type="submit" aria-label="Add task">
                <i className="las la-plus" />
            </button>
            <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
        </StyledForm>
    )
}