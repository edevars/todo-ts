import { useState } from 'react'
import { ItemInterface, TaskProperties } from '../../types'
import { StyledItem } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Modal } from '../Modal'

interface TaskFunctions {
  updateTaskProperty(taskId: number, property: TaskProperties, value: any): void
  deleteTask(taskId: number): void
}

type ItemProps = ItemInterface & TaskFunctions

export const Item = (props: ItemProps): JSX.Element => {
  const { taskId, description, checked, updateTaskProperty, deleteTask } = props
  const [isChecked, setChecked] = useState(checked)
  const [showModal, setShowModal] = useState(false)

  const handleCheckBox = () => {
    updateTaskProperty(taskId, 'checked', !isChecked)
    setChecked(!isChecked)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <StyledItem>
        <input type="checkbox" checked={isChecked} onChange={handleCheckBox} />
        <p>{description}</p>
        <div className="controlButtons">
          <button onClick={openModal}>
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          <button
            onClick={() => {
              deleteTask(taskId)
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </StyledItem>
      {showModal && (
        <Modal
          selectedItem={taskId}
          updateTaskProperty={updateTaskProperty}
          closeModal={closeModal}
        />
      )}
    </>
  )
}
