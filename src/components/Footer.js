import React from 'react';
import RedesSociales from './RedesSociales';
import ListaCategorias from './Categorias';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <ListaCategorias />
        </div>
        <div className="footer-right">
          <RedesSociales />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
