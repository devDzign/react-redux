import React from 'react';
import Header from './Header'
import {Route, Switch} from "react-router-dom";

import Home from '../components/Home'
import Resources from '../components/Resources'
import RequireAuthentication  from '../helpers/requireAuthentication'

function App() {
    return (
        <>
            <Header/>

            <div className="row">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/resource" component={RequireAuthentication(Resources)}/>
                </Switch>
            </div>
        </>

    );
}

export default App;
