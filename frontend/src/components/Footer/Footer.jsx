import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import './Footer.css'

export default function Footer() {
    return (
        <footer id="footer">
            <nav id="social">
                <ul>
                    <li><FaFacebookF size="25" color="#2a2a2a" /></li>
                    <li><FaInstagram size="25" color="#2a2a2a" /></li>
                    <li><FaLinkedinIn size="25" color="#2a2a2a" /></li>
                </ul>
            </nav>
            <p>Template Curriculo</p>
        </footer>
    )
}
