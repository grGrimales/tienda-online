import React, { createContext } from 'react';


import styles from '../../../styles/styles.module.css';
import { useProduct } from '../../../hooks/useProduct';
import { NavLink } from 'react-router-dom';


export const ProductContext = createContext({});
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value }) => {
    const { counter, increaseBy } = useProduct({ onChange, product, value });

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
            }}
        >
            <NavLink   exact= 'true'
                    to='/product/1'>
            <div className={`${styles.productCard} ${className}`} style={style} >
                {children}
            </div>
            </NavLink>
        </Provider>
    );
};
