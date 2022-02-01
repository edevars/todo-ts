export const Info = (props: { pendingTasks: number }): JSX.Element => {
    const { pendingTasks } = props
    return (
        <div>
            <ul>
                <li>ToDo</li>
                <li>Completed</li>
                <li>All</li>
                <li>Items Left {pendingTasks}</li>
            </ul>
        </div>
    )
}