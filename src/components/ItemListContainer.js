import React from 'react';
import ProductCard from './ProductCard'; // Asegúrate de que la ruta sea correcta
import productos from './productos'; // Importa los datos de productos

function ItemListContainer() {
  return (
    <div className="product-list">
      <div className='products-cards container'>
        {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
      </div>
          
    </div>
  );
}

export default ItemListContainer;
