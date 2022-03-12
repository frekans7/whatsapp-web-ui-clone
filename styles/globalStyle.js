import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        width: 100%;
        font-size:16px; 
    }

    body {
        display: grid;
        min-height: 100vh;
        background: var(--bg);
        color: var(--fg);   
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        // Remove scroollbar of window
        ::-webkit-scrollbar {
            display: none;
            overflow: hidden;
        }
       
    }
    img {
        width: 100%;
        height: 100%;
    }

    #__next {
        height:100vh
    }

    :root {
        --fg: #000;
        --bg: #fff;
        --gray: #919191; 
        --grey2: #51585c;
        --blue: #4FC3F7;
        --text-gray: #4A4A4A;
        --header-bg: #EDEDED;
        --footer-bg: #F0F0F0;
        --text: #303030;
        --text-red: #DF3333;
        --blue: #2F80ED;
        --text-green: #009688;
        --text-green2: #05CC51;
        --green-message: #DCF8C6;
        --light-blue: #9DE1FE;
        --light-green: #00BFA5;
        --red: #CC0000;  
        --notification-bg:#9DE1FE;
        --component-bg: #fff;
        --icon-hover:#d5d5d5;
        --menu-bg:#fff;
        --extra-bg:#EDEDED;
        --scrollbar:#c3c7ca;
        --chose-theme: #fff;
        --shadow: #0b141a;
        --modal-bg:#ffffffd9;
        
    }

    [data-theme="dark"] {
        --fg: #e0edef;
        --bg: #000;
        --header-bg: #202c33;
        --notification-bg:#182229;
        --text-gray: #8696a0;
        --component-bg: #111b21;
        --icon-hover:#374248;
        --menu-bg: #233138;
        --extra-bg:#0c1317;
        --scrollbar: #374045;
        --chose-theme: #3b4a54;
        --shadow:#3b4a54;
        --modal-bg:#000000B3;
        
    }

    ::-webkit-scrollbar {
        width: 6px;
        background-color: var(--component-bg);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--scrollbar); 
    }
`;

export default GlobalStyle;
