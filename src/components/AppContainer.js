import React, {
  Component
} from 'react'
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
    axios.post(url, body).then(response => console.log(response.menssage)).catch(err => console.log(err.menssage))
  }
  
  delProduct = id => {
    axios.delete(url + "/" + id)
  }
    render() {
      return ( 
      <div>
        <LandingPage
          produtos={this.state.products}
        />
        </div>
      )
    }
  }