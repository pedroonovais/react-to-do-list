import { Link } from "react-router-dom"
import { StyledMenuItem, StyledMenuItemsList, StyledNav } from "./Menu.style"
import { BiHome, BiFile, BiUser } from "react-icons/bi";

export const Menu = () => {
    return (
        <StyledNav>
            <StyledMenuItemsList>
                <StyledMenuItem>
                    <BiHome size="1.8rem" color="var(--primary-color)" />
                    <Link to="/">Home</Link>    
                </StyledMenuItem>
                <StyledMenuItem>
                    <BiFile size="1.8rem" color="var(--primary-color)" />
                    <Link to="/nova-lista">Nova Lista</Link>    
                </StyledMenuItem>
                <StyledMenuItem>
                    <BiUser size="1.8rem" color="var(--primary-color)" />
                    <Link to="/perfil">Perfil</Link>    
                </StyledMenuItem>
            </StyledMenuItemsList>
        </StyledNav>
    )
}