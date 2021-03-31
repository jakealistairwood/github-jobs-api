import { createGlobalStyle } from 'styled-components';

export const lightMode = {
    body: '#F4F6F8',
    fontColor: '#6E8098',
}

export const darkMode = {
    body: '#121721',
    fontColor: '#6E8098'
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body}
    }
`