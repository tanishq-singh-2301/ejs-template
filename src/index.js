import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style.css';
import Home from '../views/home.jsx';
import Dashboard from '../views/dashboard.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));