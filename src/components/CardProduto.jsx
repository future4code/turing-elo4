import React from "react";
import styled from "styled-components";




const Card = styled.div`
    display: flex;
    flex-flow: column wrap;
    border-radius: 16px;
`;

const CardDescription = styled.div`
    background-color: #E9E8E8;
    width: 100%;
    border-radius: 4px;
    margin: 10px 0;

`;

const CardImg = styled.img`
    height: 254px;
    width: 100%;
    border-radius: 8px;
`
const Name = styled.h3`
    color: #363636;
    margin: 4px;
`

const Description = styled.p`
    color: #6A34BB; 
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    margin: 0 8px;
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
        <Name>{props.data.name}</Name>
        <Description>{props.data.description}</Description>
        <b><Price>R$: {props.data.price}</Price></b>
        <DividePrice>{props.data.installments}x R${props.data.price/props.data.installments} sem juros</DividePrice>
        </CardDescription>
    </Card>
}