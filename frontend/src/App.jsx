import React from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import Content from './components/Content/Content'

export default function App() {
    return (
        <div className="container">
            <div className="grid-container">
                <Menu />
                <Content />
            </div>
        </div>
    )
}
