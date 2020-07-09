import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const DivContenedor=styled.div`

display:flex;
justify-content:center;
width:100vw;
height: 90vh;

background-color:#E5E5E5;

`
const DivContenedor1=styled.div`
flex-direction:column;
align-items:flex-end;
width:70vw;
height: 90vh;
display:flex;


`

const  DivCartaoNumeroTarg=styled.div`
width:70vw;
height:40vh;
`
const PositionTextPagamento=styled.div`

display:flex;
justify-content:center;
width:70vw;

`
const TextMedoPagamento=styled.p`
font-size:24px;
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;
color: #636363;
`

const PositionControCartao=styled.div`
display:flex;
justify-content:space-around;

`

const PositionImgCartaoCatao=styled.div`
display:flex;
flex-direction:column;
`
const PositionNomMesAno=styled.div`
display:flex;
justify-content:space-around;
width:70vw;
height:10vh;

`
const NomMesAno=styled.div`
display:flex;
justify-content:space-around;
padding:10px;
margin-top:20;
`

const PositionParceleCodiSeg=styled.div`
display:flex;
justify-content:space-around;
width:70vw;
height:10vh;
margin-top:20px;

`

const ParceleCodiSeg=styled.div`

`

const DivContenedor2=styled.div`
width:30vw;
height: 90vh;

display:flex;
justify-content:center;
padding-top:40px;
`
const Divimgenes=styled.div`
width:20vw;
height:60vh;
background: #C4C4C4;
border-radius: 17px;
`
const DivComprasFuturas=styled.div`
display:flex;
justify-content:flex-start;
width:70vw;
height:10vh;
margin-top:20px;

`

const Comprasfuturas=styled.div`

`
 
const PosionEnviar=styled.div`
display:flex;
justify-content:flex-end;
`

const DivBottonEnviar=styled.div`
display:flex;
justify-content:flex-end;
`
const BottonEnviar=styled.div`

`

export class MetododePagamento extends React.Component{


    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
      };
    
      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    

//////////////////////////////////////////////////////


    state = {
        value: 'female',
      };
    
      handleChange = event => {
        this.setState({ value: event.target.value });
      };

    render(){
        const { classes } = this.props;
      
        return(
            <div> 
               <Header /> 
               


 <DivContenedor>
                  
                 
               <DivContenedor1>
                    <DivCartaoNumeroTarg>

                    <PositionTextPagamento>
                    <TextMedoPagamento>Metodo de Pagamento</TextMedoPagamento>
                   </PositionTextPagamento>

 <PositionControCartao >


        <FormControl component="fieldset" >
          <FormLabel component="legend"></FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender2"
           
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio color="primary" />}
              label="CARTAO DE CREDITO"
              labelPlacement="start"
            />
            <FormControlLabel
              value="male"
              control={<Radio color="primary" />}
              label="NAO ESPECIFICADO"
              labelPlacement="start"
            />
            <FormControlLabel
              value="other"
              control={<Radio color="primary" />}
              label="FATURADO"
              labelPlacement="start"
            />
           

          </RadioGroup>
         
        </FormControl>

        <PositionImgCartaoCatao>

        <TextField
          id="outlined-full-width"
          
          style={{ margin: 8 }}
          placeholder="NUMERO DE CARTAO"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

         <TextField
          id="outlined-full-width"
          
          style={{ margin: 8 }}
          placeholder="NUMERO DE CARTAO"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        

        </PositionImgCartaoCatao>

      </PositionControCartao>

       </DivCartaoNumeroTarg>



       <PositionNomMesAno>
                       <NomMesAno>
                       <TextField
          id="outlined-textarea"
          label="Nome do Titular"
          placeholder="Placeholder"
          multiline
          margin="normal"
          variant="outlined"
        />

         <TextField
          id="outlined-number"
          label="Mes de Validade"
          value={this.state.age}
          //onChange={this.handleChange('age')}
          type="number"
  
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />

         <TextField
          id="outlined-number"
          label="Ano de Validade"
          value={this.state.age}
          //onChange={this.handleChange('age')}
          type="number"
         
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />

                </NomMesAno>
   </PositionNomMesAno>

   <PositionParceleCodiSeg>
                      <ParceleCodiSeg>
          <TextField
          id="outlined-number"
          label="Parcele en:"
          value={this.state.age}
          //onChange={this.handleChange('age')}
          type="number"
         
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-number"
          label="Codigo de Seguranca:"
          value={this.state.age}
          //onChange={this.handleChange('age')}
          type="number"
         
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />
                      </ParceleCodiSeg>
   </PositionParceleCodiSeg>


             <DivComprasFuturas>

                 
                <Comprasfuturas>
                <FormControlLabel
              value="female"
              control={<Radio color="primary" />}
              label="Deseja salvar o cartao para compras futuras?"
              labelPlacement="start"
            />
        

                  </Comprasfuturas>
  </DivComprasFuturas>


  <DivBottonEnviar>        
   <BottonEnviar>

   <Button variant="contained" color="primary" >
                    Enviar
   </Button>

    </BottonEnviar>
   </DivBottonEnviar>
 



     </DivContenedor1>

                <DivContenedor2>
                <Divimgenes>
                  
                </Divimgenes>
                </DivContenedor2>
 </DivContenedor>




               





            </div> //no se toca

        )
    }
}

export default MetododePagamento