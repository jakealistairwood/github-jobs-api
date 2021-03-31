import { createGlobalStyle } from 'styled-components';

export const lightMode = {
    body: '#F4F6F8',
    fontColor: '#6E8098',
    cardBg: '#FFFFFF',
    h3: '#19202D'
}

export const darkMode = {
    body: '#121721',
    fontColor: '#6E8098',
    cardBg: '#19202D',
    h3: '#FFFFFF'
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body}
    }

    h3 {
        color: ${props => props.theme.h3}
    }
`