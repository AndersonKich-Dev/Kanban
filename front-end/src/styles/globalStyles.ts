import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}


@media (max-width: 1080px) {
    html {
        font-size: 93.75%;
    }   
}

@media (max-width: 720px) {
    html {
        font-size: 87.5%;
    }   
}

body {
    font-family: 'Montserrat', sans-serif;

    .bublle{
        position: absolute;
        display: none;
        padding: 7px 20px;
        background-color: #4C4C4C;
        border-radius: 5px;
        font-size: 10px;
        white-space: nowrap;
        font-family: 'Montserrat', sans-serif;
        color: #fff;
        z-index: 99;
    }
}

ul, li {
    list-style-type: none;
}

a {
    text-decoration: none;  
}

button {
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
}

`





