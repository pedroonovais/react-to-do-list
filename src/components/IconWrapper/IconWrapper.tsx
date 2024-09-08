import { StyledIconWrapper } from "./IconWrapper.style"

interface IconWrapperProps{
    children: React.ReactNode
    onClick?: () => void
}

export const IconWrapper = ({children, onClick}:IconWrapperProps) => {
    return <StyledIconWrapper onClick={onClick}>{children}</StyledIconWrapper>
}