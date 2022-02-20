import { Dispatch, SetStateAction } from 'react'
import { TaskListType } from '../../types'
import { StyledAside, FilterButtons } from './styles'

interface InfoProps {
  visible: boolean
  pendingTasks: number
  setTasksShowed: Dispatch<SetStateAction<TaskListType>>
}

export const MenuList = (props: InfoProps): JSX.Element => {
  const { pendingTasks, setTasksShowed } = props
  return (
    <StyledAside visible={props.visible}>
      <FilterButtons>
        <li>
          <p>TODO {pendingTasks}</p>
        </li>
        <li>
          <button
            onClick={() => {
              setTasksShowed('all')
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setTasksShowed('todo')
            }}
          >
            Todo
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setTasksShowed('completed')
            }}
          >
            Completed
          </button>
        </li>
        <li>
          <p>Clear completed</p>
        </li>
      </FilterButtons>
    </StyledAside>
  )
}
