import React from "react";
import styled from "styled-components";
import axios from "axios";




const Card = styled.div`
    display: flex;
    flex-flow: column wrap;
    height: 56vh;
    width:  16vw;
    border-radius: 16px;
`;

const CardDescription = styled.div`
    background-color: #E9E8E8;
    height: 67px;
    width: 243px;
    border-radius: 4px;
    margin: 10px 0;

`;

const CardImg = styled.img`
    height: 254px;
    width: 248px;
    border-radius: 8px;
`
const Description = styled.p`
    color: #6A34BB; 
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    text-align: center;
    margin: 0;
`;

const Price = styled.p`
    color: #363636;
    margin: 8px 0 0 8px;
    font-size: 14px;

`;

const DividePrice = styled.p`
    color: #363636;
    margin: 2px 8px;
    font-size: 14px;
`;

export default props => {

    return <Card> 
        <CardImg src={props.data.photos}/>
        <CardDescription>
        <Description>{props.data.description}</Description>
        <b><Price>R$: {props.data.price}</Price></b>
<DividePrice>{props.parcela}x R${props.data.price/props.parcela} sem juros</DividePrice>
        </CardDescription>
    </Card>
}