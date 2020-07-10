import styled from 'styled-components'

export const Container = styled.main`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 800px;
    height: 100vh;
    margin: 0 auto;
`

export const Form = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 32px;
    width: 310px;
    height: 400px;

    label {
        border-top: 1px solid #b3b3b3;
        padding: 4px;
    }

    input {
        border: none;
        outline: none;
        height: 32px;
        padding-left: 32px;
        margin: 8px;
    }

    textarea {
        border: none;
        border-bottom: 1px solid #b3b3b3;
        padding-left: 32px;
        outline:none;
    }
`

export const ButtonNext  = styled.div`
    align-self: flex-end;
    margin-top: 32px;
`