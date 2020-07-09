import React, { Component } from 'react'
import CadastroUsuario from '../components/CadastroUsuario' 
import Header from './Header'
import { MetododePagamento } from './MetododePagamento'


export class AppContainer extends Component {
  render() {
    return (
      <div>
    
	    {/*<CadastroUsuario />*/}
      <MetododePagamento />
      </div>
    )
  }
}
