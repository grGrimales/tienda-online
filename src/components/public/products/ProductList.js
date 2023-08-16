import React from "react";
import { useShoppingCart } from "../../../hooks/useShoppingCart";
import { ProductCard } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";

export const ProductList = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  const products = [
    {
      id: 1,
      title: "Analog Classic Watch",
      description: "An elegant analog watch that complements any style.",
      price: 49.99,
      image:
        "https://res.cloudinary.com/dcxto1nnl/image/upload/v1627698064/samples/ecommerce/analog-classic.jpg",
    },
    {
      id: 2,
      title: "Wireless Headphones",
      description:
        "High-quality wireless headphones for an immersive music experience.",
      price: 89.99,
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    },
    {
      id: 3,
      title: "Fast Charger",
      description:
        "Quickly charge your devices with this efficient fast charger.",
      price: 19.99,
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    },
    {
      id: 4,
      title: "Ergonomic Keyboard",
      description:
        "A comfortable and efficient keyboard designed for productivity.",
      price: 64.99,
      image:
        "https://res.cloudinary.com/dcxto1nnl/image/upload/v1627698064/samples/ecommerce/analog-classic.jpg",
    },
    {
      id: 5,
      title: "Gaming Mouse",
      description:
        "Enhance your gaming experience with this high-performance gaming mouse.",
      price: 39.99,
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    },
  ];

  return (
    <div className="bg-white mt-40">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold text-gray-90">Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="group relative cursor-pointer"
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />
              <ProductTitle className="text-bold" />
              {/* <ProductButtons className="cursor-pointer" /> */}
            </ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};
