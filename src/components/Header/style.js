import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: #6a34bb;
    display: grid;
    grid-template-columns: 1fr 3fr 1.5fr;
    align-items: center;
    padding: 0 16px;
    height: 60px;

    h1 {
        color: #ffffff;
        margin: 0;
    }
`

export const SearchBar = styled.div`
    display: flex;


    button {
        color: #787575;
        border: none;
        border-radius: 5px 0 0 5px;
        height: 25px;
        outline:none;
    }

    input {
        border: none;
        border-radius: 0 5px 5px 0;
        height: 25px;
        outline:none;
        width: 70%;
    }
    
`

export const LoginLogout = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const SearchButton = styled.button`
    background: none;
    margin-left: -40px;
    cursor: pointer;
`