import { StyledInput, StyledInputArea, StyledLabel } from "./Input.style"

interface InputProps{
    type: string
    name: string
    id: string
    placeholder: string
    label: string
}

export const Input = ({ type, name, id, placeholder, label }:InputProps) => {
    return (
        <StyledInputArea>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput type={type} name={name} id={id} placeholder={placeholder}/>
        </StyledInputArea>
    )
}