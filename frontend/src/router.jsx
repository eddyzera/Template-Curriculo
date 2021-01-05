import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'

export default function Router() {
    return (
        <Switch>
            <Route path="/" exact  component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Switch>
    )
}