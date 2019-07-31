import React, { Component } from 'react'
import './UnidadesDeNegocio.css'

import Card from './Card/Card'

class UnidadesDeNegocio extends Component {

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
        const unidades = this.state.negocios.map(uni => {
            return <Card text={uni}/>
        })
        return (
            <div className="UnidadesDeNegocio">
                <h1>Unidades De Negocio</h1>
                {unidades}
            </div>
        )
    } 
}

export default UnidadesDeNegocio