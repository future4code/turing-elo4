import React from "react"
import {Container, Container2, Form, AddImgage, Input} from './style'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Categoria  from './Categoria'

class CadastroProduto extends React.Component {
    state = {
        nameValue: '',
        descriptionValue: '',
        priceValue: '',
        categoryValue: "1",
        photosValue: "",
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

    cadastrarProduto = () => {
        const body = {
            name: this.state.nameValue,
            description: this.state.descriptionValue,
            price: this.state.priceValue,
            category: this.state.categoryValue,
            photos: this.state.photosValue,
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
                    <AddImgage>
                        <label>Adicionar foto do produto</label>
                        <input type="text" placeholder="url da imagem do produto" />
                        <Button variant="contained" color='primary'>Proximo</Button>
                    </AddImgage>
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
               <Button variant="contained" color='secondary'>Proximo</Button>
            </Container>
        )
    }
}

export default CadastroProduto