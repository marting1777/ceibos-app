import React, { Component } from 'react'
import './CardsResto.css'

import Aux from '../../../HOC/Auxiliar/Auxiliar'
import Card from './Card/Card'

class CardsNegocio extends Component {

    state = {
        restos: [
            'Mercados',
            'Sustentabilidad',
            'Inversiones'
        ]
    }

    render () {
        const cardsResto = this.state.restos.map(resto => {
            return <Card text={resto}/>
        })
        return (
            <Aux>
                <h1 className="TituloCardsGrid">Otras Secciones</h1>
                <div className="CardsResto">
                    {cardsResto}
                </div>
            </Aux>
        )
    }
}

export default CardsNegocio