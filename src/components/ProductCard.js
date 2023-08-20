import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ producto, agregarAlCarrito }) {
  const handleButtonClick = () => {

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
        <Button variant="success" onClick={handleButtonClick}>Comprar</Button>

      </Card.Body>
    </Card>
  );
}

export default ProductCard;
