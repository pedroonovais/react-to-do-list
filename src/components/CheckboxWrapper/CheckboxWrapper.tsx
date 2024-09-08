import { StyledCheckboxWrapper } from "./CheckboxWrapper.style"

interface CheckboxWrapperProps{
    children: React.ReactNode
}

export const CheckboxWrapper = ({ children }: CheckboxWrapperProps) => {
    return <StyledCheckboxWrapper>{children}</StyledCheckboxWrapper>
}