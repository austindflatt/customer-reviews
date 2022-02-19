import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #f5f8ff;
        color: #000;
        font-family: Cabin;
    }

    .container {
        max-width: 768px;
        margin: auto;
        padding: 0 20px;
    }


    .close,
    .edit {
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
        background: none;
        border: none;
    }

    .edit {
        right: 40px;
    }

    input {
        border: 2px solid rgb(234, 234, 234);
        border-radius: 6px;
        height: 40px;
        width: 100%;
        color: #000;
        transition: all 0.2s ease 0s;
        outline: none;
        font-size: 17px;
        background-color: rgb(255, 255, 255);
        padding: 10px;
    }

    input {
        &:focus {
        border: 2px solid #a15ef5;
        transition: 0.2s;
        }
    }
`

export default GlobalStyle