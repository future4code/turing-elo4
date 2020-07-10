import React, { Component } from 'react'
import 'typeface-roboto'
import axios from "axios"
import CadastroProduto from './CadastroProduto/CadastroProduto'

const url = "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products"

export class AppContainer extends Component {
  render() {
      return (
      <div>
        <CadastroProduto />
      </div>
    )
  }
}
