import React from 'react';
import ProductCard from './ProductCard'; 
import productos from './productos';
import { useParams } from 'react-router-dom';


function ItemListContainer() {
  const { categoryName } = useParams();

  const filteredProducts = categoryName
  ? productos.filter((producto) => producto.categoria === categoryName)
  : productos;

  return (
    <div className="product-list">
      <div className='products-cards container'>
      {filteredProducts.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
          
    </div>
  );
}

export default ItemListContainer;
