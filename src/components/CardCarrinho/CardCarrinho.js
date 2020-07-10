import React from "react"
import {CardCarrinhoContainer, List, Quantidade} from './style'
import Button from "@material-ui/core/Button"


class CardCarrinho extends React.Component {
    state = {
        produtosDoCarrinho: [
            {
                "name": "Produto",
                "description": "Esse é um produto muito legal!",
                "price": 10,
                "paymentMethod": "card",
                "category": "Categoria 1",
                "photos": ["https://picsum.photos/300/200"],
                "installments": 3
            },
            {
                "name": "Produto",
                "description": "Esse é um produto muito legal!",
                "price": 10,
                "paymentMethod": "card",
                "category": "Categoria 1",
                "photos": ["https://picsum.photos/300/200"],
                "installments": 3
            }
        ],
        quantidade: 0
    }




    render() {
        return (
            <CardCarrinhoContainer>
                <h1>Carrinho</h1>
                <List>
                    {this.state.produtosDoCarrinho.map(produto => {
                        return (
                        <li>
                            <img src={produto.photos} alt="Imagem do produto" />
                            <Quantidade>
                                <label>Quant.</label>
                                <input type="number" />
                            </Quantidade>
                            <p>{produto.name}</p>
                            <p>{produto.description}</p>
                            <p>R$ {produto.price}</p>
                            <span onClick={''}>excluir produto</span>
                        </li>
                        )
                    })}
                </List>
                <div>
                    <Button onClick={''} size="small">Limpar Carrinho</Button>
                </div>
            </CardCarrinhoContainer>
        )
    }
}

export default CardCarrinho