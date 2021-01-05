import React from 'react'
import Perfil from '../../img/perfil.jpg'
import './Menu.css'

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
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
