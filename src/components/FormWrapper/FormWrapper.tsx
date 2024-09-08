import { StyledFormWrapper } from "./FormWrapper.style"

interface FormWrapper{
    children: React.ReactNode
}

export const FormWrapper = ({ children }: FormWrapper) => {
    return <StyledFormWrapper>{children}</StyledFormWrapper> 
}