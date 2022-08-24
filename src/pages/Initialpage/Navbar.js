import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <div classname="navbar-content">
                <a href="#" >
                    <img src="/public/logo.png" className="logo">
                </a>
                <ul id="nav-mobile" classname="right hide-on-med-and-down">
                    <li classname= "entrar">
                        <a >
                            <p> Entrar </p>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}