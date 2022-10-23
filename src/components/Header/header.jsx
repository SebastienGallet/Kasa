import React  from 'react';
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png";
import "../../styles/main.css"

function Header() {
    return (
        <header>
            <img className='logo' src={logo} alt='logo Kasa'/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/apropos">A Propos</Link>
            </nav>
        </header>
    )
}
export default Header