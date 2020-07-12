import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content:center;
    width: 1200px;
    height: 90vh;
    margin: 0 auto;
`
export const ContainerCadastro = styled.div`
    display:flex;
    flex-direction: column;
    height: 90vh;
    margin: 0 auto;
`

export const Form = styled.div`
    display:flex;
    flex-direction: column;
    width: 310px;

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
        height: 60px;
    }
`

export const ButtonNext  = styled.div`
    align-self: flex-end;
    margin-top: 16px;
`

export const MeusProdutos = styled.div`
    margin: 0 auto;
    max-width: 900px;
    height: 95vh;
    
    div {
        text-align: right;
    }
`

export const List = styled.ul`
    width: 60vw;
    ul {
        padding: 0;
    }

    li {
        align-items: center;
        border-bottom: 1px solid #CCCCCC;
        display: flex;
        justify-content: space-between;
        padding-bottom: 8px;
        margin-bottom: 8px;
    }

    img {
        box-shadow: 1px 1px 4px #6a34bb;
        border-radius: 12px;
        object-fit: cover;
        object-position: center;
        height: 60px;
        width: 100px;
    }

    span {
        color: #b3b3b3;
        font-size:14px;
        cursor: pointer;
    }

    p {
        font-size: 13px;
        max-width: 20%;
    }
`