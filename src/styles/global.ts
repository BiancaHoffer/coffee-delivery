import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.white};
    }

    body, input, textarea, button  {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #574F4D;
        font-size: 1rem;
    }
`