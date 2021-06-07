import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css'
import App from './App'
import Home from './Home'
import About from './About'
import Projects from './Projects'

const IndexedApp = () => {
    return (
        <Router>
            <Switch>
            <Route>
                <App/>
            </Route>
             <Route>
                <Home/>
            </Route>
             <Route>
                <About/>
            </Route>
             <Route>
                <Projects/>
            </Route>

            </Switch>
    
    
    
        </Router>
    )
}

export default IndexedApp
