import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
// Components
import Navbar from './components/UI/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// Pages Components
import Home from './components/Home/Home'
import Nosotros from './components/Nosotros/Nosotros'
import UnidadesDeNegocio from './components/UnidadesDeNegocio/UnidadesDeNegocio'
import Productos from './components/Productos/Productos'
import Mercados from './components/Mercados/Mercados'
import Sustentabilidad from './components/Sustentabilidad/Sustentabilidad'
import Inversiones from './components/Inversiones/Inversiones'
import Contacto from './components/Contacto/Contacto'

function App() {
    return (
        <div className="App">
            <Router>
                <header>
                    <Navbar />
                </header>
                
                <main className="MainContainer">
                    <Route path="/" exact component={Home} />
                    <Route path="/nosotros" component={Nosotros} />
                    <Route path="/unidades-de-negocio" component={UnidadesDeNegocio} />
                    <Route path="/productos" component={Productos} />
                    <Route path="/mercados" component={Mercados} />
                    <Route path="/sustentabilidad" component={Sustentabilidad} />
                    <Route path="/inversiones" component={Inversiones} />
                    <Route path="/contacto" component={Contacto} />
                </main>
            </Router>
            <Footer />
        </div>
    )
}

export default App
