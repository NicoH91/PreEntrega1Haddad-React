import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    
    
    import('./productos.js')
      .then((productosData) => {
        const productos = categoryName
          ? productosData.default.filter((producto) => producto.categoria === categoryName)
          : productosData.default;

        setFilteredProducts(productos);
      })
      .catch((error) => {
        console.error('Error al cargar los productos:', error);
      });
  }, [categoryName]); 

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
