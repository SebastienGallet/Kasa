import React  from 'react';
import whitelogo from "../../assets/whitelogo.png";

function Footer() {
    return (
        <footer>
            <img className='whitelogo' src={whitelogo} alt='logo Kasa'/>
            <p id="mention">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer