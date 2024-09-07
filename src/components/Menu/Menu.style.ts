import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    align-items: flex-end;
    border-top: 1px solid lightgray
`

export const StyledMenuItemsList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`

export const StyledMenuItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;

    & a{
        font-size: 1rem;
        color: var(--primary-color);
        text-decoration: none;
    }
`