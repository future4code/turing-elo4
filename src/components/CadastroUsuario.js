import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from "@material-ui/icons/Cancel"

const Div1=styled.div`  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

const Div2=styled.div`
    width: 303px;
    height: 560px;
    border-radius: 17px;
    background-color: #F3F3F3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
`

const MyCancelIcon = styled(CancelIcon)`
    margin: 5% 0px 0px 88%;
    cursor: pointer;
    color: #CD0C4C;
    
`


const Divcapfoto=styled.div`
    display: flex;
    justify-content: center;
`

const Divfoto=styled.div`
   margin-top: 30px;
    width: 115px;
    height: 115px;
    background-color:blueviolet;
    border-radius: 100px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 
`
const Fotointeriorcero=styled.div`
display: flex;
justify-content: center;
`

const Fotointerioruno=styled.div`
width: 101px;
height: 101px;
border-radius: 100px;
background-color:white;
margin-top: 7px;
`
const Positioninput=styled.div`
display: flex;
justify-content: center;
`
const Inputss=styled.div`
   padding-bottom: 80px;
`

const PositionDeTitulos=styled.div`
display:flex;
justify-content:center;
`

const Titulos=styled.p`
font-family:Arial, Helvetica, sans-serif;
font-size:12px;
color:#696969;

`

const PositionButtons=styled.div`
display:flex;
justify-content:center;
`
const DivIcon=styled.label`
display:flex;
margin-top:25px;
justify-content:center;
`

 class CadastroUsuario extends React.Component{
  

    render(){

        const { classes } = this.props;

        return(

            <div>
  
            <Div1>               
                <Div2>
                  <MyCancelIcon  onClick={this.props.handleClickCadastrar}/>
                    <Divcapfoto>
                         <Divfoto>
                             <Fotointeriorcero>
                                       <Fotointerioruno>

                                              <DivIcon>
                                             <label htmlFor="icon-button-file"   >
                                               <IconButton color="primary" component="span">
                                             <PhotoCamera />
                                             </IconButton>
                                             </label> 
                                             </DivIcon>
 
                                       </Fotointerioruno>    
                                        
                             </Fotointeriorcero>
                             <PositionDeTitulos>
                             <Titulos>Cadastro de Usuario</Titulos>
                             </PositionDeTitulos>
                                       <Positioninput>
                                        
                                           <Inputss >

                                          
        <TextField
          large="12px"
          id="standard-name"
          label="Name"
          margin="normal"
        />


        <TextField
          id="standard-name"
          label="Telefone"
          margin="normal"
        />

       <TextField
          id="outlined-email-input"
          label="Email"
      
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
         
        />


         <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />                                

        <PositionButtons>
        <Button variant="contained" color="primary" >
                    Enviar
        </Button>
        </PositionButtons>
        
                                           </Inputss>
                                       </Positioninput>
                         </Divfoto>
                    </Divcapfoto>
                </Div2>
            </Div1>
 </div>
        )
    }
}

export default CadastroUsuario