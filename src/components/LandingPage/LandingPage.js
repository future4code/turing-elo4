import React, { Component } from 'react';
import 'typeface-roboto';
import {GridProdutos} from "./style";
import CardLogin from "../CardLogin"
import CadastroUsuario from "../CadastroUsuario"
import CadastroProduto from "../CadastroProduto/CadastroProduto"

import { Container, DivProdutos, DivPopUp, Blur} from "./style";
import CardProduto from '../CardProduto';
import Header from "../Header/Header"




export class LandingPage extends Component {
  state = {
    showCadastrar: false,
    logado: false,
    logando: false,
    cadastrando: false,
  }


  handleClickCadastrar = () => {
    this.setState({showCadastrar: !this.state.showCadastrar});
  }

  handleClickEntrar = () =>{
      this.setState({logando: !this.state.logando});
  }

  handleClickLogin = () =>{
    this.setState({logando: !this.state.logando});
    this.setState({logado: true});
  }

  
  handleClickLogOut = () =>{
    this.setState({logado: false});
  }

  handleVender = () =>{
    this.setState({cadastrando: !this.state.cadastrando});
  }

  render() {
    const lading = this.props.produtos.map(produto => {
              return <CardProduto data={produto}/>
            })

      return (
      <Container>
        <Header 
          handleClickCadastrar={this.handleClickCadastrar} 
          handleClickEntrar={this.handleClickEntrar}
          logado={this.state.logado} 
          handleVender = {this.handleVender}
          cadastrando = {this.state.cadastrando}
          handleClickLogin={this.handleClickLogOut}
        
        />
        {this.state.showCadastrar && <> <Blur></Blur> <DivPopUp><CadastroUsuario handleClickCadastrar={this.handleClickCadastrar}/></DivPopUp></>}
        {this.state.logando && <> <Blur></Blur><DivPopUp><CardLogin   handleClickLogin={this.handleClickLogin} handleClickEntrar={this.handleClickEntrar}/></DivPopUp></>}      
        <DivProdutos>
          {!this.state.cadastrando ? <GridProdutos>{lading}</GridProdutos> : <CadastroProduto criarProduto={this.props.criarProduto } reload={this.props.reload} addProduto={this.props.addProduto} produto={this.props.produtos} delProduct={this.props.delProduct}/> }
            
        </DivProdutos>
      </Container>
    )
  }
}
