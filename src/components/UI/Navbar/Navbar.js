import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'

import Logo from '../../Logo/Logo'
import CeibosLogoUrl from '../../../assets/images/ceibos-logo.png'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="LogoContainer">
                <Logo imageUrl={CeibosLogoUrl} />
            </div>
            <nav className="Nav">
                <ul className="NavigationList">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/nosotros">NOSOTROS</Link></li>
                    <li><Link to="/unidades-de-negocio">UNIDADES DE NEGOCIO</Link></li>
                    <li><Link to="/productos">PRODUCTOS</Link></li>
                    <li><Link to="/mercados">MERCADOS</Link></li>
                    <li><Link to="/sustentabilidad">SUSTENTABILIDAD</Link></li>
                    <li><Link to="/inversiones">INVERSIONES</Link></li>
                    <li><Link to="/contacto">CONTACTO</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar