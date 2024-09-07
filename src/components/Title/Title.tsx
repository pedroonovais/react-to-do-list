import { StyledTitle } from "./Title.style"

interface TitleProps{
    children: React.ReactNode
}

export const Title = ({children}:TitleProps) => {
    return <StyledTitle>{children}</StyledTitle>
}