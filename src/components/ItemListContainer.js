import React from 'react';
import ProductCard from './ProductCard';
import productos from './productos';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function ItemListContainer() {
  const { categoryName } = useParams();

  const filteredProducts = categoryName
    ? productos.filter((producto) => producto.categoria === categoryName)
    : productos;

  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto];
    
    setCarrito(nuevoCarrito);
    alert(`Producto agregado al carrito: ${producto.nombre}`);
  };

  return (
    <div className="product-list">
      <div className='products-cards container'>
        {filteredProducts.map((producto) => (
         <ProductCard
         key={producto.id}
         producto={producto}
         agregarAlCarrito={agregarAlCarrito}
       />
        ))}
      </div>

    </div>
  );
}

export default ItemListContainer;
