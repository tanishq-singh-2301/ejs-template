import React from 'react';
import '../../assets/css/header.scss';
import { Link } from 'react-router-dom';
import SideBar from './sideBar.jsx';

const Header = (props) => {
    const dropdown__btn = () => {
        var value = document.getElementById('side__bar').style.right;
        document.getElementById('side__bar').style.right = value === '-400px' ? '5vw' : '-400px';
    };

    return (
        <>
            <SideBar />
            <header id='header'>
                <Link to='/' className='header__tag' style={{ cursor: 'pointer' }}><i>home</i> 🏕️</Link>
                {window.innerWidth > 600 ? <p className='header__tag' ><i>{props.heading.title}</i> {props.heading.imoji}</p> : null}
                <p className='header__tag' onClick={dropdown__btn} id='dropdown__btn'>/\/#!/</p>
            </header>
        </>
    );
};

export default Header;