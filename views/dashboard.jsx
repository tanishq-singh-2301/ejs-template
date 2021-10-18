import React from 'react';
import '../assets/css/dashboard.scss';
import Header from './components/header.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, logIn, logOut } from '../state/actions';

const Dashboard = () => {
    const counter = useSelector(state => state.counterReducer);
    const auth = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    return (
        <section id='dashboard-page'>
            <Header heading={{ title: 'Dashboard', imoji: '👻' }} />
            <main>
                <div className='container'>
                    <h1 id='title'>Counter : {counter}</h1>
                    <div id='button-div'>
                        <button className='btn' onClick={() => dispatch(increment())}>+</button>
                        <button className='btn' onClick={() => dispatch(decrement())}>--</button>
                    </div>
                </div>

                <div className='container'>
                    <h1 id='title'>User : {!auth ? 'LOGGED OUT' : 'LOGGED IN'}</h1>
                    <div id='button-div'>
                        {
                            auth ?
                                <button className='btn' onClick={() => dispatch(logOut())}>LogOut</button> :
                                <button className='btn' onClick={() => dispatch(logIn())}>LogIn</button>
                        }
                    </div>
                </div>
                {auth ? <p id='secrect-text'>THIS IS SECRECT TEXT</p> : null}
            </main>
        </section>
    )
};

export default Dashboard;