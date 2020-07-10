import React from 'react'
import styled from 'styled-components'

const Position=styled.div`
display:flex;
justify-content:center;
flex-direction:column;
margin-top:20vh;
`

const DivColud=styled.div`
width:21vw;
height:20vh;
border-radius: 22px;
background: #C4C4C4;
box-shadow:  5px 5px 10px #bebebe, 
             -5px -5px 10px #cacaca;
margin:5px;
`

const DivPositionFooter=styled.footer`
width:${props=>props.widthx};
height:${props=>props.heightx};
/*width:100vw;*/
/*height:25vh;*/
background: #C4C4C4;
border-radius: 10px 10px 0px 0px;

display:flex;
justify-content:center;

`
const Texto1=styled.p`
color:#FDFDFD;
`


export class Footer extends React.Component{

    render(){
        return(
            <Position>

            <DivPositionFooter widthx="100vw" heightx="22vh">

            <DivColud>
            <Texto1>SOBRE O ELO7</Texto1>
            <Texto1>Quem somos</Texto1>
            <Texto1>Pessoas e Lojas</Texto1>
            </DivColud>

            <DivColud>
            <Texto1>SAIBA MAIS</Texto1>
            <Texto1>Como comprar</Texto1>
            <Texto1>Pagamento seguro</Texto1> 
            </DivColud>

            <DivColud>
            <Texto1>Quero abrir minha loja</Texto1>
            <Texto1>Central de atendimento</Texto1>
            <Texto1>Carreira</Texto1>
            </DivColud>

            <DivColud>       
            <Texto1>Trocas e devoluções</Texto1>
            </DivColud>

            </DivPositionFooter>

           

        

         

            

          

            </Position>
        )
    }
}
export default Footer