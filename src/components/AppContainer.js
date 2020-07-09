<<<<<<< HEAD
import React, { Component } from 'react'
import CadastroUsuario from '../components/CadastroUsuario' 
import Header from './Header'
import { MetododePagamento } from './MetododePagamento'
=======
>>>>>>> 54e3bd455c2b1b39e72b6a854d265dcd8cba80b3


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
<<<<<<< HEAD
    
	    {/*<CadastroUsuario />*/}
      <MetododePagamento />
      </div>
=======

>>>>>>> 54e3bd455c2b1b39e72b6a854d265dcd8cba80b3
    )
  }
}
