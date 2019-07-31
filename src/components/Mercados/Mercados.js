import React, { Component } from 'react'
import './Mercados.css'

import Card from './Card/Card'

class Mercados extends Component {

    state = {
        mercados: [
            'Uruguay',
            'Argentina',
            'Paraguay',
            'Bolivia'
        ]
    }

    render () {
        const mercados = this.state.mercados.map(mer => {
            return <Card text={mer}/>
        })
        return (
            <section>
                <h1>Mercados</h1>
                <div className="CardsContainerMer"> 
                    {mercados}
                </div>
            </section>
        )
    }
}

export default Mercados