import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function RedesSociales() {
    return (
        <div className="redes-sociales">
            <h4>Redes sociales</h4>
            <div className='redes'>
                <a href="https://www.facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://www.twitter.com/tu_pagina" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com/tu_pagina" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>

        </div>
    );
}

export default RedesSociales;
