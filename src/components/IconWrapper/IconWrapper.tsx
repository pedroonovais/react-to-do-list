import { StyledIconWrapper } from "./IconWrapper.style"

interface IconWrapperProps{
    children: React.ReactNode
}

export const IconWrapper = ({children}:IconWrapperProps) => {
    return <StyledIconWrapper>{children}</StyledIconWrapper>
}