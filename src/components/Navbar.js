import React from 'react'
import CartWidget from './CartWidget'
import { useState } from 'react';

const Navbar = () => {
    const categorias = ['Calzado ', 'Electronica', 'Fragancia', 'Ropa'];

    const [mostrarMenuCategorias, setMostrarMenuCategorias] = useState(false);

    const toggleMenuCategorias = () => {
        setMostrarMenuCategorias(!mostrarMenuCategorias);
    };



    return (
        <>
            <nav className='navbar'>
                <a href="index.html"> <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg></a>

                <div>
                    <ul className='ul'>
                        <li> <a className='active' href='index.html' >Home</a></li>
                        <li className="categorias" onClick={toggleMenuCategorias}>
                            <a href='#'>Categorías</a>
                            <ul className={`submenu ${mostrarMenuCategorias ? 'mostrar' : ''}`}>
                                {categorias.map((categoria, index) => (
                                    <li key={index}><a href="#">{categoria}</a></li>
                                ))}
                            </ul>
                        </li>
                        <li> <a href='index.html'>Online</a></li>
                        <li> <a href='index.html'>Information</a></li>
                        <CartWidget />
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar
