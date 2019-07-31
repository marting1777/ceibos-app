import React from 'react'
import './Contacto.css'

import Banner from '../UI/Banner/Banner'

const banner3 = 'Banner3'

function Contacto() {
    return (
        <section>
            <h1>Contacto</h1>
            <Banner clase={banner3}>
                <p>Formulario de contacto + Formulario de Trabaja con Nosotros</p>
            </Banner>
        </section>
    )
}

export default Contacto