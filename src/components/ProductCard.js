
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function ProductCard({ producto, agregarAlCarrito, showModal, handleModalOpen, handleModalClose }) {
  const handleComprarClick = () => {
    agregarAlCarrito(producto);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          Precio: ${producto.precio}
        </Card.Text>
        <Card.Text>
          Categoría: {producto.categoria}
        </Card.Text>

        <Button variant="warning" onClick={handleComprarClick}>Comprar</Button>
        <Button variant="dark"   onClick={handleModalOpen}
        >  <Link to={`/product/${producto.id}`}>Detalles</Link> </Button>

        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Detalles de {producto.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{producto.descripcion}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
