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

    .App {
        width: 1140px;
        margin: 0 auto;
    }

    .outer-shadow {
        box-shadow: ${(theme) => theme.color.outer_shadow};
    }
    .inner-shadow {
        box-shadow: ${(theme) => theme.color.inner_shadow};
    }
    .hover-in-shadow {
        position: relative;
        z-index: 1;
    }
    .hover-in-shadow:hover {
        box-shadow: ${(theme) => theme.color.outer_shadow_0};
    }
    .hover-in-shadow:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
        z-index: -1;
    }
    .hover-in-shadow:hover:after {
        box-shadow: ${(theme) => theme.color.inner_shadow};
    }

`;

export default GlobalStyle;
