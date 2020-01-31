import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink to="/" className="navbar-brand" >BlogRC</NavLink>
            <div className="collapse navbar-collapse ml-4" id="navbarColor01">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink activeClassName='header--active--link' exact to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='header--active--link' to="/create" className="nav-link" >Create</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
