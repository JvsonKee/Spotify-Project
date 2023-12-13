import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    };
 
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    };
    
    body {
        line-height: 1;
    };

    :root {
        --accent-green: #1DB954;
        --dark-black: #000000;
        --light-black: #121212;
        --hover: #202020;
        --text-grey: #A7A7A7;
        --text-white: #FFFFFF;
    };

    body {
        background-color: var(--dark-black);
        color: var(--text-white);
        font-family: 'Montserrat';
        font-weight: 500;

        @media screen and (max-width: 820px) {
            background-color: var(--light-black);
        }
    };

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles