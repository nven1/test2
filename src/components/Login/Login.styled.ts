import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${props => props.theme.orange};
    font-family: "Tiempos Headline";
    display: grid;
    place-content: center;
    place-items: center;
    height: 100vh;
`

export const Title = styled.h1`
    font-size: 8em;
    margin-bottom: .2em;
    color: ${props => props.theme.white};
    font-family: monospace;
`