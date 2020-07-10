import React from "react";
import Card from '@material-ui/core/Card';
import styled from "styled-components";
import Button from '@material-ui/core/Button';

const MyCard = styled(Card)`
    background-color: #F3F3F3;
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 360px;
    height: 265px;
    
`
const MyButton = styled(Button)`
    margin: 16px 0;
`;

const Titulo = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin: 8px auto;
    color: #737374;
`;

const Text = styled.p`
    align-self: flex-start;
    color: #BBBBBC;
    font-weight: 500;
    margin: 16px 8px;
`;

const Input = styled.input`
    margin: 0 8px;
    width: 90%;
    align-self: flex-start;
    outline: none;
    border: none;
    background-color: #F3F3F3;
    border-bottom: solid 3px #E3E3E3;
`;


export default props =>{

    return <MyCard>
        <Titulo>Login</Titulo>
        <Text>Usuário/Email:</Text>
        <Input value={props.loginValue} onChange={props.handleOnChangeLogin}/> 
        <Text>Senha:</Text>
        <Input value={props.passworldValue} onChange={props.handleOnChangePassworld}/>
        <MyButton variant={"contained"} color={'primary'} onClick={props.handleClicklogin} >Login</MyButton>
        </MyCard>
}

CardLogin.jsx