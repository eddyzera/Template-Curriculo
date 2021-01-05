import React from 'react'
import './Home.css'
import ImgBanner from '../../img/banner.jpg'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return (
        <div id="home">
            <div className="banner">
                <img src={ImgBanner} alt=""/>
            </div>
            <div className="title">
                <h1>Hi! I am Edgar</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusantium, alias nulla magni ratione, vero officia pariatur quasi ducimus inventore est nesciunt optio sapiente similique dolor. Perspiciatis possimus ratione repellat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusantium, alias nulla magni ratione, vero officia pariatur quasi ducimus inventore est nesciunt optio sapiente similique dolor. Perspiciatis possimus ratione repellat.</p>
            </div>
            <Footer />
        </div>
    )
}
