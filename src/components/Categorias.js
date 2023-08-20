import React from 'react';
import { Link } from 'react-router-dom';

function ListaCategorias() {
  const categorias = ['Calzado', 'Electrónica', 'Fragancias', 'Ropa'];

  return (
    <div className="lista-categorias">
      <h3>Categorías</h3>
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>
            <Link to={`/category/${categoria}`}>{categoria}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCategorias;
