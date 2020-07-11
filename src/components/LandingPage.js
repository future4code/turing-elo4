import React from 'react'
import styled from 'styled-components'


const Divladingpage=styled.div`
/*background-color:red;*/
width:100vw;
height:72vh;
`

const DivcuadroparatargetasXmodelo=styled.div`

width:100vw;
height:1vh;
display:flex;
justify-content:center;

`



const Divcuadroparatargetas=styled.div`
/*background-color:blue;*/
width:100vw;
height:30vh;
display:flex;
justify-content:center;




`
const Divtargetas=styled.div`
margin-top:17vh;
background-color:green;
width: 248px;
height: 331px;
display:flex;
margin-bottom:10px;
justify-content:center;
align-items:flex-end;
margin-left:20px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;

img {
            box-shadow: 1px 1px 5px #6a34bb;
            border-radius: 12px;
            object-fit: cover;
            object-position: center;
        }
        > img {
            width: 248px;
           height: 331px;
        }

`




const Divminitargecompleta=styled.div`
display:flex;
justify-content:center;
width: 217px;
height: 65px;
margin-bottom:25px;
`
const Divminitarge=styled.div`
width: 65px;
height: 65px;
margin-left:8px;
margin-right:8px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;

> img {
    width: 65px;
height: 65px;
    }
`
const PositionDivPublicidade=styled.div`
display:flex;
flex-direction:column;
justify-content:center;

`
const DivPublicidade=styled.div`
width:100vw;
height: 25vh;
box-shadow: 4px 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Marginfisico=styled.div`
width:100vw;
height: 4vh;
/*box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);*/
`

const PositionCuadrosdeventas=styled.div`
display:flex;
justify-content:center;
width:100vw;
height:42vh;
/*background-color:green;*/
`
const CuadrosVentas=styled.div`

width:250px;
height:250px;
background-color:#FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;
margin-left:20px;
`

{/*
export const CardContainer = styled.div`
        position: relative;
        border-radius: 12px;
        height: 330px;
        width: 250px;

`

export const Thumbnails = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-evenly;
    bottom: 0;
    padding: 20px 8px;
    
    > img {
        width: 30%;
    }
`*/}
//width: 248px;
//height: 331px;

//width: 65px;
//height: 65px;

export class LandingPage extends React.Component{


    render(){
        return(
        <div>

         

            <Divladingpage>
                   <Divcuadroparatargetas>
                        <Divtargetas>
                            
                               <Divminitargecompleta>
                                   
                                          <Divminitarge>
                                          <img src="https://img.elo7.com.br/product/zoom/2082591/flor-madeira-artesanato-decorativo-buque-arranjo-enfeite-vasodeflor.jpg" alt="imagem do produto" />
                                         
                                         </Divminitarge>

                                         <Divminitarge>
                                         <img src="https://img.elo7.com.br/product/zoom/2082591/flor-madeira-artesanato-decorativo-buque-arranjo-enfeite-vasodeflor.jpg" alt="imagem do produto" />
                                         </Divminitarge>
                                         
                                         <Divminitarge>
                                         <img src="https://nacoesunidas.org/wp-content/uploads/2019/11/Fotos-Waraos-Tradicao-@benjamastphoto-21_1.jpg" alt="imagem do produto" />
                                         </Divminitarge>
                               </Divminitargecompleta>
                         </Divtargetas>

                         <Divtargetas>
                         <Divminitargecompleta>
                         <Divminitarge>
                                          <img src="https://img.elo7.com.br/product/zoom/2082591/flor-madeira-artesanato-decorativo-buque-arranjo-enfeite-vasodeflor.jpg" alt="imagem do produto" />
                                         
                                         </Divminitarge>

                                         <Divminitarge>
                                         <img src="https://img.elo7.com.br/product/zoom/2082591/flor-madeira-artesanato-decorativo-buque-arranjo-enfeite-vasodeflor.jpg" alt="imagem do produto" />
                                         </Divminitarge>
                                         
                                         <Divminitarge>
                                         <img src="https://nacoesunidas.org/wp-content/uploads/2019/11/Fotos-Waraos-Tradicao-@benjamastphoto-21_1.jpg" alt="imagem do produto" />
                                         </Divminitarge>
                               </Divminitargecompleta>
                         </Divtargetas>

                         <Divtargetas>
                         <Divminitargecompleta>
                         <Divminitarge>
                                          <img src="https://img.elo7.com.br/product/zoom/2082591/flor-madeira-artesanato-decorativo-buque-arranjo-enfeite-vasodeflor.jpg" alt="imagem do produto" />
                                         
                                         </Divminitarge>

                                         <Divminitarge>
                                         <img src="https://img.elo7.com.br/product/zoom/2082591/flor-madeira-artesanato-decorativo-buque-arranjo-enfeite-vasodeflor.jpg" alt="imagem do produto" />
                                         </Divminitarge>
                                         
                                         <Divminitarge>
                                         <img src="https://nacoesunidas.org/wp-content/uploads/2019/11/Fotos-Waraos-Tradicao-@benjamastphoto-21_1.jpg" alt="imagem do produto" />
                                         </Divminitarge>
                               </Divminitargecompleta>
                         </Divtargetas>
                   </Divcuadroparatargetas>



</Divladingpage>


<PositionDivPublicidade>
                  
                   <DivPublicidade>

                   </DivPublicidade>

 </PositionDivPublicidade>

                  
                  <Marginfisico> 
                    

                  </Marginfisico>


    <PositionCuadrosdeventas> 
                                 
                  <CuadrosVentas> 
                    

                  </CuadrosVentas>

                  <CuadrosVentas> 
                    

                  </CuadrosVentas>

                  <CuadrosVentas> 
                    

                  </CuadrosVentas>

  </PositionCuadrosdeventas>

  <PositionDivPublicidade>
                  
                  <DivPublicidade>

                  </DivPublicidade>

</PositionDivPublicidade>

  <DivcuadroparatargetasXmodelo>
                        <Divtargetas>
                               <Divminitargecompleta>
                               <Divminitarge>
                                          <img src="https://img.elo7.com.br/product/zoom/2082591/flor-madeira-artesanato-decorativo-buque-arranjo-enfeite-vasodeflor.jpg" alt="imagem do produto" />
                                         
                                         </Divminitarge>

                                         <Divminitarge>
                                         <img src="https://img.elo7.com.br/product/zoom/2082591/flor-madeira-artesanato-decorativo-buque-arranjo-enfeite-vasodeflor.jpg" alt="imagem do produto" />
                                         </Divminitarge>
                                         
                                         <Divminitarge>
                                         <img src="https://nacoesunidas.org/wp-content/uploads/2019/11/Fotos-Waraos-Tradicao-@benjamastphoto-21_1.jpg" alt="imagem do produto" />
                                         </Divminitarge>
                               </Divminitargecompleta>
                         </Divtargetas>

                         <Divtargetas>
                         <Divminitargecompleta>
                         <Divminitarge>
                                          <img src="https://img.elo7.com.br/product/zoom/2082591/flor-madeira-artesanato-decorativo-buque-arranjo-enfeite-vasodeflor.jpg" alt="imagem do produto" />
                                         
                                         </Divminitarge>

                                         <Divminitarge>
                                         <img src="https://img.elo7.com.br/product/zoom/2082591/flor-madeira-artesanato-decorativo-buque-arranjo-enfeite-vasodeflor.jpg" alt="imagem do produto" />
                                         </Divminitarge>
                                         
                                         <Divminitarge>
                                         <img src="https://nacoesunidas.org/wp-content/uploads/2019/11/Fotos-Waraos-Tradicao-@benjamastphoto-21_1.jpg" alt="imagem do produto" />
                                         </Divminitarge>
                               </Divminitargecompleta>
                         </Divtargetas>

                         <Divtargetas>
                         <Divminitargecompleta>
                         <Divminitarge>
                                          <img src="https://img.elo7.com.br/product/zoom/2082591/flor-madeira-artesanato-decorativo-buque-arranjo-enfeite-vasodeflor.jpg" alt="imagem do produto" />
                                         
                                         </Divminitarge>

                                         <Divminitarge>
                                         <img src="https://img.elo7.com.br/product/zoom/2082591/flor-madeira-artesanato-decorativo-buque-arranjo-enfeite-vasodeflor.jpg" alt="imagem do produto" />
                                         </Divminitarge>
                                         
                                         <Divminitarge>
                                         <img src="https://nacoesunidas.org/wp-content/uploads/2019/11/Fotos-Waraos-Tradicao-@benjamastphoto-21_1.jpg" alt="imagem do produto" />
                                         </Divminitarge>
                               </Divminitargecompleta>
                         </Divtargetas>
                   </DivcuadroparatargetasXmodelo>









                  

                   </div>


            
        )
    }
}

export default LandingPage


