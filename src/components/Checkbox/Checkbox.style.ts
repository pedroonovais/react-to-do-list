import styled from "styled-components";

export const StyledCheckbox = styled.input`
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 10px;
    border: 2px solid var(--primary-color);
    cursor: pointer;
    margin-right: 10px;

    &:checked {
        background-color: var(--primary-color); /* Cor de fundo ao marcar */
    }
`;

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
`
