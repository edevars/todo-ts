import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { SyntheticEvent, useState } from 'react'
import { StyledForm, AddButton } from './styles'

interface AddTaskProps {
  createTask(description: string): void
}

export const AddTask = (props: AddTaskProps): JSX.Element => {
  const [description, setDescription] = useState('')
  const { createTask } = props

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    createTask(description)
    setDescription('')
  }

  return (
    <StyledForm action="onSubmit" onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        required
        placeholder="Comprar despensa"
      />
      <AddButton type="submit" aria-label="Add task">
        <FontAwesomeIcon icon={faPlus} />
      </AddButton>
    </StyledForm>
  )
}
