import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import CollabifyLogo from '../assets/CollabifyLogo.png'


function Header() {

    return (
        <header>
        <div className="logo-and-name">
                {/* LOGO WITH NAME */}
                <img src={ CollabifyLogo } alt="Collabify Logo" className="logo" />
                <h2 className = " collabify-name "> Collabify </h2>
        </div>
        <div className="navigations-and-user-profile">
            <nav>
                <Link to="/" className="nav-link">Dashboard</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/tasks" className="nav-link">Tasks</Link>
            </nav>
            <nav>
                
            </nav>

        </div>
        </header>

    )
}

export default Header;