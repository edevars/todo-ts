import { useState } from 'react'
import { ItemInterface } from '../../types'
import { StyledItem } from './styles'

export const Item = (props: ItemInterface): JSX.Element => {
    const { description, checked } = props
    const [isChecked, setChecked] = useState(checked)

    return (
        <StyledItem>
            <input type="checkbox" checked={isChecked} onChange={() => { setChecked(!isChecked) }} />
            <p>{description}</p>
        </StyledItem>
    )
}