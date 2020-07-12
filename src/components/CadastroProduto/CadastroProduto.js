import React from "react"
import {Container, Form, ButtonNext, MeusProdutos, ContainerCadastro, List } from './style';
import Button from '@material-ui/core/Button';

class CadastroProduto extends React.Component {
    state = {
        nameValue: '',
        descriptionValue: '',
        priceValue: '',
        categoryValue: "1",
        photosValue: [],
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
            paymentMethod: "card",
            category: this.state.categoryValue,
            photos: [this.state.photosValue],
            installments: 3
        }
        this.props.addProduto(body)
        this.props.reload()
    }

    render() {
        return (
            <Container>
                <MeusProdutos>
                    <List>
                        <h1>Meus Produtos</h1>
                        <ul>
                            {this.props.produto.map(produto => {
                                return (
                                    <li>
                                        <img src={produto.photos} alt="Imagem do produto" />
                                        <p>{produto.name}</p>
                                        <p>{produto.description}</p>
                                        <p>R$ {produto.price}</p>
                                        <span onClick={''}>excluir produto</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </List>
                    <div>
                        <Button onClick={''} size="small">Limpar Carrinho</Button>
                    </div>
                </MeusProdutos>

                <ContainerCadastro>
                    <h1>Cadastro de Produto</h1>
                    <Form>
                        <label>Nome do Produto</label>
                        <input type='text'
                            value={this.state.nameValue}
                            onChange={this.inputName}
                            placeholder={'tapete'} />
                        <label>Preço</label>
                        <input type='Number'
                            value={this.state.priceValue}
                            onChange={this.inputPreco}
                            placeholder={'R$ 10'} />
                        <label>Adicionar foto do produto</label>
                        <input
                            value={this.state.photosValue}
                            onChange={this.inputFoto}
                            type="text"
                            placeholder="url da imagem do produto"
                        />
                        <label>Descrição</label>
                        <textarea
                            rows='10' cols='30'
                            value={this.state.descriptionValue}
                            onChange={this.inputDescricao}
                            placeholder={'Descrição'} />
                    </Form>
                    <ButtonNext>
                            <Button onClick={this.cadastrarProduto} variant="contained" color='primary'>Cadastrar Produto</Button>
                    </ButtonNext>
                </ContainerCadastro>
            </Container>
        )
    }
}

export default CadastroProduto