import React, { Component } from 'react'
import 'typeface-roboto'
import axios from "axios"
import CardProduto from '../CardProduto'

const url = "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products"

export class LandingPage extends Component {
    state ={ 

    }
  render() {
      return (
      <div>
          {this.props.produtos.map(produto => {
              return <CardProduto 
                data={produto}
              />
          })}
      </div>
    )
  }
}
