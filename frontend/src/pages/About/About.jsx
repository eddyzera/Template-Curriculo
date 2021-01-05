import React from 'react'
import './About.css'
import ImgBanner from '../../img/banner.jpg'
import Footer from '../../components/Footer/Footer'

export default function About() {
    return (
        <div id="about">
            <div className="banner">
                <img src={ImgBanner} alt=""/>
            </div>

            <div className="title">
                <h2>Quem é Edgar Silva ??</h2>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusantium, alias nulla magni ratione, vero officia pariatur quasi ducimus inventore est nesciunt optio sapiente similique dolor. Perspiciatis possimus ratione repellat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusantium, alias nulla magni ratione, vero officia pariatur quasi ducimus inventore est nesciunt optio sapiente similique dolor. Perspiciatis possimus ratione repellat.</p>
            </div>
            <Footer />
        </div>
    )
}
