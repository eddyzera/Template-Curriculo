import React from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import Content from './components/Content/Content'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="grid-container">
                    <Menu />
                    <Content />
                </div>
            </div>
        </BrowserRouter>
    )
}
