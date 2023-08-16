import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../../../styles/styles.module.css";
import noImage from "../../../assets/no-image.jpg";

export const ProductImage = ({ img, className, style }) => {
  const { product } = useContext(ProductContext);
  let imgToShow = img ? img : product.image ? product.image : noImage;

  return (
    <div className={`${className}`}>
      <img
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        src={imgToShow}
        //style={style}
        alt="Product"
      />
    </div>
  );
};
