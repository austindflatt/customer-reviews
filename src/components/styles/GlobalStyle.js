import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #f5f8ff;
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
`

export default GlobalStyle