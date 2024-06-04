import React, { useState, useEffect } from 'react';

const Cart = ({ cart, updateCart, removeFromCart }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        let timeoutId;

        if (isPopupVisible) {
            timeoutId = setTimeout(() => {
                updateCart([]);
                setIsPopupVisible(false);
            }, 5000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isPopupVisible, updateCart]);

    useEffect(() => {
        let sum = 0;
        cart.forEach(item => {
            sum += item.quantity * item.product.price;
        });
        setTotalCost(sum);
    }, [cart]);

    const handleQuantityChange = (product, event) => {
        const quantity = parseInt(event.target.value, 10);
        if (!isNaN(quantity) && quantity > 0 && typeof updateCart === 'function') {
            updateCart(product.id, quantity);
        }
    };

    const handleFinalizePurchase = () => {
        setIsPopupVisible(true);
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {isPopupVisible && (
                <div className="popup">
                    <p>Your purchase has been finalized!</p>
                </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                {cart.map(item => (
                    <div key={item.product?.id ?? item.id} style={{ width: '200px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '5px', padding: '10px', flexShrink: 0 }}>
                        <div className="item-details">
                            {item.product && item.product.image && (
                                <img src={item.product.image} alt={item.product.name} style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
                            )}
                            <div className="item-info">
                                <h3 style={{ fontSize: '16px', height: '50px', margin: '0 0 10px 0' }}>{item.product?.name}</h3>
                                <div style={{ height: '100px', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '10px' }}>
                                    <p style={{ margin: '0' }}>{item.product?.description}</p>
                                </div>
                                {item.product && item.product.price && (
                                    <p style={{ fontSize: '14px', margin: '10px 0' }}>${item.product.price}</p>
                                )}
                                <div>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.product, e)}
                                        min="1"
                                        style={{ width: '50px' }}
                                    />
                                    <button className="btn btn-danger" onClick={() => removeFromCart(item.product.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                        <p>{item.quantity}x {item.product?.name}: ${(item.quantity * item.product.price)}</p>
                    </div>
                ))}
            </div>
            <p>Total Cost: ${totalCost}</p>
            <button className="btn btn-primary" onClick={handleFinalizePurchase}>Finalize Purchase</button>
        </div>
    );
};

export default Cart;
