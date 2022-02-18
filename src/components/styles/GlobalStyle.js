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
`

export default GlobalStyle