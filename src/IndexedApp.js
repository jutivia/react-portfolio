import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css'
import App from './App'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Error from './Error'

const IndexedApp = () => {
    return (
        <Router>
            <Switch>
            <Route  path='/Home'>
                <App/>
            </Route>
             <Route exact path='/'>
                <Home/>
            </Route>
             <Route path='/About'>
                <About/>
            </Route>
             <Route path='/Projects'>
                <Projects/>
            </Route>
             <Route path='/Contact'>
                <Contact/>
            </Route>
             <Route path='*'>
                <Error/>
            </Route>
            </Switch>
    
    
    
        </Router>
    )
}

export default IndexedApp
