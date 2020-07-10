import React from "react"
import {CardDetalheContainer, ValorProduto, Price, Payment} from './style'
import Button from "@material-ui/core/Button"
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import CreditCard from '@material-ui/icons/CreditCard'
import Receipt from '@material-ui/icons/Receipt'
import TextField from '@material-ui/core/TextField'

const styles = {
    root: {
      width: 200,
      background: "#F3F3F3"
    },
  }

class CardDetalheDoProduto extends React.Component {
    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value });
      }

    render() {
        const { classes } = this.props
        const { value } = this.state
        return (
            <CardDetalheContainer>
                <div>
                    <img src="https://imagens-revista.vivadecora.com.br/uploads/2018/09/artesanato-geral-para-jardim-simples.jpg" alt="Foto do produto" />
                    <section>
                        <h1>Produto</h1>
                        <ValorProduto>De: R$ 36.90</ValorProduto>
                        <Price>
                            <p>Por: 30.90</p>
                            <div>
                                <label>Quantidade</label>
                                <input type="number" />
                            </div>
                        </Price>
                        <Button variant="contained" color="primary" >Comprar Produto</Button>
                        <p>Pronta-entrega</p>
                        <Payment>
                            <p>Formas de pagamento</p>
                            <BottomNavigation
                                value={value}
                                onChange={this.handleChange}
                                showLabels
                                className={classes.root}
                            >
                                <BottomNavigationAction label="Cartão" icon={<CreditCard />} />
                                <BottomNavigationAction label="Boleto" icon={<Receipt />} />
                            </BottomNavigation>
                        </Payment>
                    </section>
                </div>
                <fieldset>
                    <label>Pergunte ao vendedor: </label>
                    <textarea></textarea>
                </fieldset>
            </CardDetalheContainer>
        )
    }
}

export default withStyles (styles)(CardDetalheDoProduto)