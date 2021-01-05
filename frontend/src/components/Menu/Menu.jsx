import React from 'react'
import Perfil from '../../img/perfil.jpg'
import './Menu.css'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div id="menu">
            <header>
                <img src={Perfil} alt="Perfil do Usuário"/>
                <h2>Eddy <strong>Silva</strong></h2>
                <span>Dev Frontend</span>
            </header>

            <div className="navigation">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
