import React from "react";
import Card from '@material-ui/core/Card';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import CancelIcon from "@material-ui/icons/Cancel"

const MyCard = styled(Card)`
    background-color: #F3F3F3;
    display: flex;
    position: fixed;
    left: 35vw;
    top: 25vh;
    flex-flow: column;
    align-items: center;
    width: 360px;
    height: 303px;
    
`
const MyCancelIcon = styled(CancelIcon)`
    align-self: flex-end;
    margin: 2%;
    cursor: pointer;
    color: #CD0C4C;
`;

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
    color: #696969;
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
        <MyCancelIcon onClick={props.handleClickEntrar}/>
        <Titulo>Login</Titulo>
        <Text>Usuário/Email:</Text>
        <Input value={props.loginValue} onChange={props.handleOnChangeLogin}/> 
        <Text>Senha:</Text>
        <Input value={props.passworldValue} onChange={props.handleOnChangePassworld}/>
        <MyButton onClick={props.handleClickLogin} variant={"contained"} color={'primary'}>Login</MyButton>
        </MyCard>
}

