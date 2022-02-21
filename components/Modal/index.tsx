import { SyntheticEvent, useState } from 'react'
import { StyledModal, Backdrop } from './styles'
import { TaskProperties } from '../../types'

interface ModalProps {
  selectedItem: number
  updateTaskProperty(taskId: number, property: TaskProperties, value: any): void
  closeModal(): void
}

export const Modal = (props: ModalProps) => {
  const { selectedItem, updateTaskProperty, closeModal } = props
  const [taskDescription, setTaskDescription] = useState('')

  const handleSumbmit = (event: SyntheticEvent) => {
    event.preventDefault()
    updateTaskProperty(selectedItem, 'description', taskDescription)
    closeModal()
  }

  return (
    <>
      <Backdrop onClick={closeModal} />
      <StyledModal>
        <p className="title">Editar tarea</p>
        <form action="submit" onSubmit={handleSumbmit}>
          <input
            name="task"
            type="text"
            placeholder="Descripción de la tarea"
            value={taskDescription}
            onChange={(event) => {
              setTaskDescription(event.target.value)
            }}
            required
          />
          <button type="submit">Guardar</button>
        </form>
      </StyledModal>
    </>
  )
}
