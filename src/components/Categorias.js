import React from 'react';

function ListaCategorias() {
  const categorias = ['Calzado', 'Electronica', 'Fragancia', 'Ropa'];

  return (
    <div className="lista-categorias">
      <h3>Categorías</h3>
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>{categoria}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCategorias;
