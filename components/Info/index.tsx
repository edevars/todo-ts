import { Dispatch, SetStateAction, } from "react"
import { TaskListType } from "../../types"
import { StyledController, FilterButtons } from "./styles"

interface InfoProps {
    pendingTasks: number
    setTasksShowed: Dispatch<SetStateAction<TaskListType>>
}

export const Info = (props: InfoProps): JSX.Element => {
    const { pendingTasks, setTasksShowed } = props
    return (
        <StyledController>
            <FilterButtons>
                <li><p>Items left TODO {pendingTasks}</p></li>
                <li>
                    <button onClick={() => { setTasksShowed("all") }}>
                        All
                    </button>
                </li>
                <li>
                    <button onClick={() => { setTasksShowed("todo") }}>
                        Todo
                    </button>
                </li>
                <li>
                    <button onClick={() => { setTasksShowed("completed") }}>
                        Completed
                    </button>
                </li>
                <li>
                    <p>Clear completed</p>
                </li>
            </FilterButtons>

        </StyledController>
    )
}