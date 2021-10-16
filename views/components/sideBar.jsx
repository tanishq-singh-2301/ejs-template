import React, { useEffect } from 'react';
import '../../assets/css/sidebar.scss';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const links = [['/', 'home 🏕️'], ['/three', 'three 🐽'], ['/dashboard', 'dashboard 🛹']];

    useEffect(() => {
        // window.onload = () => {
        var value = document.getElementById('side__bar').style.right;
        document.getElementById('side__bar').style.right = value === '-400px' ? '5vw' : '-400px';
        // };
    }, []);

    return (
        <nav id='side__bar'>
            <h1 id='links__name'> some links 🕸️</h1>
            <div id='links__div'>
                {
                    links.map((res, index) => {
                        return (
                            <div className='link' key={index}>
                                <p className='plus__tag'> + </p>
                                <Link to={res[0]} className='links'> {res[1]} </Link>
                            </div>
                        )
                    })
                }
            </div>
        </nav>
    );
};

export default SideBar;