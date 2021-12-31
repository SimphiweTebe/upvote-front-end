import React from 'react';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import NavBar from './components/NavBar/NavBar';

import {Switch, Route} from 'react-router-dom'

function App() {

    return (
        <main className="main">
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" exact component={Auth} />
            </Switch>
        </main>
    )
}

export default App
