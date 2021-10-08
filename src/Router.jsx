import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShowMovie from './pages/ShowMovie';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/:imdbID' component={ShowMovie}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;