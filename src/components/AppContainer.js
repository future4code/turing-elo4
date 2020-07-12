import React, {Component} from 'react'
import 'typeface-roboto'
import axios from "axios"
import { LandingPage } from './LandingPage/LandingPage'


const url = "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products"

export class AppContainer extends Component {
  state = {
    products: [],
  }

  componentDidMount = () => {
    this.getAllProducts()
  }

  getAllProducts = () => {
    axios.get(url).then(response => this.setState({
      products: response.data.products
    })).catch(err => console.log(err.menssage))
  }

  addProduct = (body) => {
    axios.post(url, body).then(response => console.log(response.data)).catch(err => console.log(err.menssage))
    this.getAllProducts()
  }
  
  delProduct = id => {
    if (window.confirm("Tem certeza que quer excluir esse produto?")) {
      axios.delete(url + "/" + id)
      this.getAllProducts()
    }
  }
  
    render() {
      return ( 
      <div>
        <LandingPage produtos={this.state.products} reload={this.getAllProducts} addProduto={this.addProduct} delProduct={this.delProduct}/>
        </div>
      )
    }
  }