import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClipboardCheck,
  faCircleCheck,
  faCheckDouble,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { Dispatch, SetStateAction } from 'react'
import { TaskListType } from '../../types'
import { StyledAside, FilterButtons, CloseWrapper } from './styles'

interface MenuListProps {
  visible: boolean
  pendingTasks: number
  totalTasks: number
  setTasksShowed: Dispatch<SetStateAction<TaskListType>>
  closeMenu(): void
}

export const MenuList = (props: MenuListProps): JSX.Element => {
  const { totalTasks, pendingTasks, setTasksShowed, closeMenu } = props
  return (
    <StyledAside visible={props.visible}>
      <CloseWrapper>
        <button onClick={closeMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </CloseWrapper>
      <FilterButtons>
        <li>
          <button
            onClick={() => {
              setTasksShowed('todo')
              closeMenu()
            }}
          >
            <FontAwesomeIcon icon={faCircleCheck} />
            <p>
              <span>{pendingTasks}</span> TODO
            </p>
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setTasksShowed('completed')
              closeMenu()
            }}
          >
            <FontAwesomeIcon icon={faCheckDouble} />
            <p>
              <span>{totalTasks - pendingTasks}</span> Completed
            </p>
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setTasksShowed('all')
              closeMenu()
            }}
          >
            <FontAwesomeIcon icon={faClipboardCheck} />
            <p>
              <span>{totalTasks}</span> All
            </p>
          </button>
        </li>
      </FilterButtons>
    </StyledAside>
  )
}
