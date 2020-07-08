import React, { Component } from 'react';
import CardLogin from "./CardLogin";
import styled from "styled-components";
import axios from "axios";


const url = "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products" 

const o = {
    "name": "meu Produto",
    "description": "Esse é um produto muito legal!",
    "price": 100,
    "paymentMethod": "card",
    "category": "Categoria 1",
    "photos": ["https://picsum.photos/300/200"],
    "installments": 3
}

export class AppContainer extends Component {
  state ={
    products: [],
  }

  getAllProducts = () =>{
    axios.get(url)
    .then(response => this.setState({products: response.data.products}))
    .catch(err => console.log(err.menssage))
  }

  addProduct = (body) =>{
    axios
    .post(url,body)
    .then(response => console.log(response.menssage))
    .catch(err => console.log(err.menssage))
  }

  delProduct = id =>{
    axios
    .delete(url+"/"+id)
  }

  render() {
      return (
      <div>
         
      </div>
    )
  }
}
