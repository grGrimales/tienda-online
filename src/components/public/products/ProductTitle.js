import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../../../styles/styles.module.css";

export const ProductTitle = ({ title, className, style }) => {
  const { product } = useContext(ProductContext);

  return (
    <>
  <h3 className="text-sm text-gray-700">
      <a href={product.href}>
        <span aria-hidden="true" className="absolute inset-0" />
        {title ? title : product.title}
      </a>
    </h3>
     <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
     </>
  
  );
};
