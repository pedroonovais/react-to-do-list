import { StyledCheckbox, StyledDiv } from "./Checkbox.style"

interface CheckboxProps{
    id: string
    label: string
    name: string
}

export const Checkbox = ({ id, label, name }:CheckboxProps) => {
    return (
        <StyledDiv style={{ display: "flex", alignItems: "center" }}>
            <StyledCheckbox id={id} type="checkbox" name={name} />
            <label htmlFor={id}>{label}</label>
        </StyledDiv>
    )
}