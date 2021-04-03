import { createGlobalStyle } from 'styled-components';

export const lightMode = {
    body: '#F4F6F8',
    fontColor: '#6E8098',
    cardBg: '#FFFFFF',
    h2: '#19202D',
    h3: '#19202D',
    input: '#FFFFFF',
    inputText: '#19202D',
    fullTimeLabel: '#19202D',
    borderRight: '#E2E6EA',
    buttonBgColor: '#EEEFFC',
    buttonTextColor: '#5964E0',
    buttonHoverColor: '#c5caf2'
}

export const darkMode = {
    body: '#121721',
    fontColor: '#6E8098',
    cardBg: '#19202D',
    h2: '#FFFFFF',
    h3: '#FFFFFF',
    input: '#19202D',
    inputText: '#FFFFFF',
    fullTimeLabel: '#FFFFFF',
    borderRight: '#6E8098',
    buttonBgColor: '#303642',
    buttonTextColor: '#FFFFFF',
    buttonHoverColor: '#525861'
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body}
    }

    h2 {
        color: ${props => props.theme.h2}
    }

    h3 {
        color: ${props => props.theme.h3}
    }

    input[type="text"] {
        background-color: ${props => props.theme.input};
        color: ${props => props.theme.inputText};
    }
`