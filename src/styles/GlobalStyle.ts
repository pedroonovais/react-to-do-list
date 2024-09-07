import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root{
        --primary-color: #0774f7;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    body{
        font-size: 16px;
    }
`