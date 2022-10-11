import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
export default function Navbar() {
    return (
        <nav>
            <div>
                <Link to='/'>
                    <img src={logo} />
                </Link>
                <ul>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/about'>about</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}