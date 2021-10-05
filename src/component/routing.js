import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './header'
import Note from './note'
import Show from './showcase/show'

function Routing(){
    return(
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Header/>
                </Route>
                <Route path='/note'>
                    <Note/>
                </Route>
                <Route path='/show'>
                    <Show/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routing