import React from "react"
import {CardContainer, Thumbnails} from './style'

class CardDestaque extends React.Component {
    state = {
    }

    render() {
        return (
            <CardContainer>
                    <img src="https://nacoesunidas.org/wp-content/uploads/2019/11/Fotos-Waraos-Tradicao-@benjamastphoto-21_1.jpg" alt="imagem do produto" />
                    
                    <Thumbnails>
                        <img src="https://img.elo7.com.br/product/zoom/2082591/flor-madeira-artesanato-decorativo-buque-arranjo-enfeite-vasodeflor.jpg" alt="imagem do produto" />
                        <img src="https://img.elo7.com.br/product/zoom/23AB61E/quadro-black-power-artesanato-em-madeira-3d-artesanatoemmadeira.jpg" alt="imagem do produto" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Iranian_handicraft.jpg" alt="imagem do produto" />
                    </Thumbnails>
            </CardContainer>
        )
    }
}

export default CardDestaque