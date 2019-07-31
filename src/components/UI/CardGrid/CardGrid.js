import React, { Component } from 'react'
import './CardGrid.css'

import Aux from '../../../HOC/Auxiliar/Auxiliar'
import Card from './Card/Card'

class CardGrid extends Component {

    state = {
        nosotros: [
            'Historia',
            'Valores',
            'Nuestro Equipo',
            'Ser Parte'
        ]
    }

    render () {
        const cards = this.state.nosotros.map(card => {
            return <Card text={card}/>
        })
        return (
            <Aux>
                <h1 className="TituloCardsGrid">Quienes Somos</h1>
                <div className="CardGrid">
                    {cards}
                </div>
            </Aux>
        )
    }
}

export default CardGrid