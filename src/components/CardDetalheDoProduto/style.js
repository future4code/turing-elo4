import styled from 'styled-components'

export const CardDetalheContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 700px;
    height: 90vh;
    margin: 0 auto;
    
    > div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
    
    > div > section > h1 {
        font-weight: 300;
        font-size: 2em;
        margin: 0;
        width: 100%
    }

    > div > img {
        border-radius: 12px;
        box-shadow: 1px 1px 5px #6a34bb;
        object-fit: cover;
        object-position: center;
        height: 300px;
        width: 200px;
    }

    > div > section {
        height: 300px;
    }

    fieldset {
        display: grid;
        border: none;
        border-top: 1px solid #CCCCCC;
        margin-top: 16px;
        width: 100%;

        > textarea {
            border: 1px solid #CCCCCC;
            margin-top: 8px;
            outline:none;
            width: 100%;
        }
    }
`

export const ValorProduto = styled.p`
    text-decoration: line-through;
`

export const Price = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div > input {
        border-radius: 4px;
        border: 1px solid #CCCCCC;
        width: 50px;
        outline:none;
        height: 28px;
        margin-left: 8px;
    }
`

export const Payment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin-right: 16px;
    }
`