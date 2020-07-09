import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Categoria  from './Categoria'


const Container = styled.main`
display:flex;
flex-flow: column wrap;
justify-content:center;
align-items:center;
width:70%;
height: 100vh;
margin: auto;
`

const Container2 = styled.div`
display:flex;
flex-direction: row wrap;
width:100%;
min-height: 50vh;
justify-content:space-around;
align-items: center;
margin:4px;
padding:8px;
border-radius:8px;
background-color:#ccc;
`

const Form = styled.div`
display:flex;
flex-direction: column;
padding:8px;
width:45%;
min-height: 90%;
border:2px solid black;
`
const Form2 = styled.div`
display:flex;
flex-direction: column;
width:45%;
min-height: 90%;
border:2px solid black;
background-color:#fff;
`

const Input = styled.input`

border: 1px solid black;
margin-bottom:16px;
width:100%;
`

export class CadastroProduto extends Component {
    state = {
        nameValue: '',
        descriptionValue: '',
        priceValue: '',
        paymentMethod: ["credito", 'dinheiro', 'boleto', 'debito'],
        categoryValue: "1",
        photosValue: "",
        installments: 10
    }

    inputName = event => {
        this.setState({ nameValue: event.target.value })
    }

    inputPreco = event => {
        this.setState({ priceValue: event.target.value })
    }

    inputDescricao = event => {
        this.setState({ descriptionValue: event.target.value })
    }

    inputFoto = event => {
        this.setState({ photosValue: event.target.value })
    }

    // inputFoto = event =>{
    //     this.setState({photosValue: event.target.value})
    // }



    cadastrarProduto = () => {
        const body = {
            name: this.state.nameValue,
            description: this.state.descriptionValue,
            price: this.state.priceValue,
            category: this.state.categoryValue,
            photos: this.state.photosValue,
            installments: this.state.installments,
            paymentMethod: this.state.paymentMethod
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products', body,).then(response => {
            alert('Produto criado com sucesso!');
        }).catch(err => {
            console.log(err.message);
        });
    };




    render() {
        return (
            <Container>
                <h1>Cadastro de Produtos</h1>
                <Container2>
                    <Form2>
                        {this.state.photosValue && (<img src={this.state.photosValue} width="100%" height="300" />)}

                    </Form2>
                    <Form>
                        <Input type='text'
                            value={this.state.nameValue}
                            onChange={this.inputName}
                            placeholder={'Nome do produto'} />
                        <Input type='Number'
                            value={this.state.priceValue}
                            onChange={this.inputPreco}
                            placeholder={'Preço'} />
                        <Input
                            value={this.state.photosValue}
                            onChange={this.inputFoto}
                            placeholder={'Url da Imagem'} />
                        <textarea
                            rows='10' cols='30'
                            value={this.state.Value}
                            onChange={this.inputDescricao}
                            placeholder={'Descrição'} />
                    </Form>

                </Container2>
               <a href={<Categoria/>} ><Button variant="contained" color='secondary'>Proximo</Button></a> 


            </Container>
        )
    }
}
