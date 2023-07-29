import { useState } from 'react';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState({});

    const onProductCountChange = ({ count, product }) => {
        setShoppingCart((oldShoppingCart) => {
            const productInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart,
                };
            }

            // Delete the product from the cart if count is 0 or negative
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;
        });
    };

    return {
        shoppingCart,
        onProductCountChange,
    };
};
