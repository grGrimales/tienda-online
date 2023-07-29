import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../../../styles/styles.module.css';
import noImage from '../../../assets/no-image.jpg';

export const ProductImage = ({ img, className, style }) => {
    const { product } = useContext(ProductContext);
    let imgToShow = img ? img : product.img ? product.img : noImage;

    return (
        <img
            className={`${styles.productImg} ${className}`}
            src={imgToShow}
            style={style}
            alt="Product"
        />
    );
};
