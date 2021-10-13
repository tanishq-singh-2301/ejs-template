import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style.css';
import Home from '../views/home.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));