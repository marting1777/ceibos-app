import React from 'react'
import './Home.css'

import Banner from '../UI/Banner/Banner'
import CardGrid from '../UI/CardGrid/CardGrid'
import CardsNegocio from '../UI/CardsNegocios/CardsNegocios'
import CardsResto from '../UI/CardsResto/CardsResto'

const banner1 = 'Banner1'
const banner2 = 'Banner2'
const banner4 = 'Banner4'

function Home() {
    return (
        <section className="Home">
            <h1>Home</h1>
            <Banner clase={banner1}>
                <p>Texto de presentación + video de alta calidad de fondo o SLIDER de imagenes con un texto fijo</p>
            </Banner>
            <br></br>
            <Banner clase={banner2}>
                <p>Carousel de marcas</p>
            </Banner>
            
            <CardGrid />
            <CardsNegocio />

            <Banner clase={banner4}>
                <p>Productos</p>
            </Banner>

            <CardsResto />
            <Banner clase={banner4}>
                <p>Formulario de contacto</p>
            </Banner>
        </section>
    )
}

export default Home