import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { MenuItem } from './MenuItem';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <Link to="/"className="navbar-logo">Portfolio<i class="fab fa-react"></i></Link>
                <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                    <ul className={click ? "nav-menu active" : 'nav-menu'}>

         
                        {MenuItem.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className={item.cName} to={item.path}>
                                        {item.title}

                                    </Link>
                                </li>
                            )

                        })}
                    </ul>
              <Button/>
            </nav>
        </>
    );
};

export default Navbar;