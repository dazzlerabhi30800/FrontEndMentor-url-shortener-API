import React, { useState } from 'react';
import style from './Sass/style.scss';

function Navbar() {
    const [click, setClick] = useState(false);
    function handleClick(e) {
        setClick(prevClick => !prevClick)
    }
    return (
        <nav className="navbar">
            <div className="logo--img">
                <img src="../images/logo.svg" alt="" />
            </div>

            <div className={click ? "list--link--wrapper active" : "list--link--wrapper"}>
                <ul className="link--list">
                    <li className="list--item">Features</li>
                    <li className="list--item">Pricing</li>
                    <li className="list--item">Resources</li>
                </ul>

                <div className="btn--container">
                    <a className="login-btn">Login</a>
                    <a className="signup-btn">Sign Up</a>
                </div>
            </div>

            <div className="menu--btn" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </nav>
    )
}


export default Navbar;
