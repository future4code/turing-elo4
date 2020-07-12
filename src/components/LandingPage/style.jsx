import styled from "styled-components";
import React from "react";


export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    width: 100vw;
    overflow: auto;
    z-index: -1;
`;

export const DivProdutos = styled.div`
    display: flex;
    flex-flow: row wrap;
    height: 100vh;
    width: 100vw;
    overflow: auto;
`;

export const DivPopUp = styled.div`
    position: fixed;
        
`;

export const Blur = styled.div`
    z-index: 0;
    opacity: 0.7;
    background-color: black;
    height: 100vh;
    width: 100vw;
    position: fixed;

`

export const GridProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    padding: 16px;
`