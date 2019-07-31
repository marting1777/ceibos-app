import React, { Component } from 'react'
import './CardsNegocio.css'

import Aux from '../../../HOC/Auxiliar/Auxiliar'
import Card from './Card/Card'

class CardsNegocio extends Component {

    state = {
        negocios: [
            'Commodities',
            'Specialties',
            'Dairy',
            'Beef',
            'Fruit Juice'
        ]
    }

    render () {
        const cardsNegocios = this.state.negocios.map(negocio => {
            return <Card text={negocio}/>
        })
        return (
            <Aux>
                <h1 className="TituloCardsGrid">Unidades de Negocio</h1>
                <div className="CardsNegocio">
                    {cardsNegocios}
                </div>
            </Aux>
        )
    }
}

export default CardsNegocio