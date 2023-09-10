import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import productos from './productos';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ItemListContainer() {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [showAddedToCartModal, setShowAddedToCartModal] = useState(false);

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

  const handleShowAddedToCartModal = () => {
    setShowAddedToCartModal(true);
  };

  const handleCloseAddedToCartModal = () => {
    setShowAddedToCartModal(false);
  };

  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
    handleShowAddedToCartModal();
  };

  const handleComprarClick = (producto) => {
    setSelectedProduct(producto); 
    handleShowAddedToCartModal();
  };

  return (
    <>
      <div className="product-list">
        <div className='products-cards container'>
          {filteredProducts.map((producto) => (
            <div key={producto.id}>
              <ProductCard
                producto={producto}
                agregarAlCarrito={() => handleComprarClick(producto)}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal show={showAddedToCartModal} onHide={handleCloseAddedToCartModal}>
        <Modal.Header closeButton>
          <Modal.Title>Producto agregado al carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct ? (
            <div>
              <p>El producto ha sido agregado a tu carrito de compras:</p>
              <p>{selectedProduct.nombre}</p>
            </div>
          ) : (
            <p>Producto no encontrado</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddedToCartModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ItemListContainer;
