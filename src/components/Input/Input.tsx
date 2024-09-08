import { StyledInput, StyledInputArea, StyledLabel } from "./Input.style"

interface InputProps{
    type: string
    name: string
    id: string
    placeholder: string
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ type, name, id, placeholder, label, value, onChange }:InputProps) => {
    return (
        <StyledInputArea>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput 
                type={type} 
                name={name} 
                id={id} 
                placeholder={placeholder} 
                onChange={(e) => onChange(e)}
                value={value}
            />
        </StyledInputArea>
    )
}