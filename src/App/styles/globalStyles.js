// Packages
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        line-height: 1.5;
        overflow-x: hidden;
        background: ${(props) => props.theme.color.bg_50};
        font-family: 'Raleway', sans-serif;
    }

    .logo {
        font-family: 'Mea Culpa', cursive;
        span {
            font-family: 'MonteCarlo', cursive;
        }
    }

`;

export default GlobalStyle;
