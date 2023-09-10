
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from './productos';
import ProductCard from './ProductCard';

function ProductDetail() {
    const { productId } = useParams();
    const producto = productos.find((p) => p.id === parseInt(productId));

    const [showModal, setShowModal] = useState(false);

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const agregarAlCarrito = (producto) => {
        alert(`Producto agregado al carrito: ${producto.nombre}`);
    };

    return (
        <div className="product-detail-container">
            <div className="product-detail-content">
                <h2>{producto.nombre}</h2>
                <ProductCard
                    producto={producto}
                    agregarAlCarrito={agregarAlCarrito}
                    showModal={showModal}
                    handleModalOpen={handleModalOpen}
                    handleModalClose={handleModalClose}
                />

            </div>
        </div>
    );
}

export default ProductDetail;
