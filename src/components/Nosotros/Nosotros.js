import React, { Component } from 'react'
import './Nosotros.css'

import Card from './Card/Card'

class Nosotros extends Component {

    state = {
        nosotros: [
            'HISTORIA',
            'VALORES',
            'NUESTRO EQUIPO',
            'FORMULARIO SER PARTE'
        ]
    }

    render () {
        const nosotros = this.state.nosotros.map(nos => {
            return <Card text={nos}/>
        })

        return (
            <section className="Nosotros">
                <h1>Nosotros</h1>
                {nosotros}
            </section>
        )
    }
}

export default Nosotros