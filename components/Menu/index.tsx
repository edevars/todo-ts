import { Dispatch, SetStateAction } from 'react'
import { TaskListType } from '../../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { MenuList } from '../MenuList'
import { MenuButton } from './styles'
import { useState } from 'react'

interface MenuProps {
  pendingTasks: number
  setTasksShowed: Dispatch<SetStateAction<TaskListType>>
}

export const Menu = (props: MenuProps): JSX.Element => {
  const [visible, setVisible] = useState(false)
  return (
    <nav>
      <MenuButton
        onClick={() => {
          setVisible(!visible)
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </MenuButton>
      <MenuList
        visible={visible}
        pendingTasks={props.pendingTasks}
        setTasksShowed={props.setTasksShowed}
      />
    </nav>
  )
}
