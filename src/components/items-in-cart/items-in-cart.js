import React from 'react';
import './items-in-cart.css';

export const ItemsInCart = ({
    quantity = 0
}) => {
    return quantity > 0 ?(
        <div className="items-in-cart">
            { quantity }
        </div>
    ) : null
}
