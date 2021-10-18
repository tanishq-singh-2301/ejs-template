import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style.scss';
import Home from '../views/home.jsx';
import Dashboard from '../views/dashboard.jsx';
import Three from '../views/three.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../state/reducers';

const store = createStore(reducers);

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/three' component={Three} />
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);