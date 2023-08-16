import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../../../styles/styles.module.css';

export const ProductButtons = ({ className, style }) => {
    const { increaseBy, counter } = useContext(ProductContext);

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
        <button className="bg-primary text-white rounded-large px-4 py-2" onClick={() => increaseBy(-1)}>
          -{' '}
        </button>
  
        <div className={styles.countLabel}> {counter} </div>
  
        <button className="bg-primary text-white rounded-large px-4 py-2 cursor-pointer" onClick={() => console.log('click')}>
          +{' '}
        </button>
      </div>
    );
};