import styled from 'styled-components'

export const CardCarrinhoContainer = styled.div`
    margin: 0 auto;
    max-width: 900px;
    height: 95vh;
    
    div {
        text-align: right;
    }
`

export const List = styled.ul`
    li {
        align-items: center;
        border-bottom: 1px solid #CCCCCC;
        display: flex;
        justify-content: space-evenly;
        padding-bottom: 8px;
        margin-bottom: 8px;
    }

    img {
        box-shadow: 1px 1px 4px #6a34bb;
        border-radius: 12px;
        object-fit: cover;
        object-position: center;
        height: 80px;
        width: 120px;
    }

    span {
        color: #b3b3b3;
        font-size:14px;
        cursor: pointer;
    }

    
`

export const Quantidade = styled.div`
    display: flex;
    flex-direction: column;
    
    input {
        border-radius: 4px;
        border: 1px solid #CCCCCC;
        width: 50px;
        outline:none;
        height: 28px;
    }
`

export const Payment = styled.div`
   
`