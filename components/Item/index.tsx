import { useState } from 'react'
import { ItemInterface, TaskProperties } from '../../types'
import { StyledItem } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'

interface TaskFunctions {
  updateTaskProperty(taskId: number, property: TaskProperties, value: any): void
}

type ItemProps = ItemInterface & TaskFunctions

export const Item = (props: ItemProps): JSX.Element => {
  const { taskId, description, checked, updateTaskProperty } = props
  const [isChecked, setChecked] = useState(checked)

  const handleCheckBox = () => {
    updateTaskProperty(taskId, 'checked', !isChecked)
    setChecked(!isChecked)
  }

  return (
    <StyledItem>
      <input type="checkbox" checked={isChecked} onChange={handleCheckBox} />
      <p>{description}</p>
      <div className="controlButtons">
        <button>
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
        <button>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </StyledItem>
  )
}
