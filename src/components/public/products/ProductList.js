import React from 'react'
import { useShoppingCart } from '../../../hooks/useShoppingCart';
import { ProductCard } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';

export const ProductList = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  const products =  [
    {
      "id": 1,
      "title": "Analog Classic Watch",
      "description": "An elegant analog watch that complements any style.",
      "price": 49.99,
      "image": "https://res.cloudinary.com/dcxto1nnl/image/upload/v1627698064/samples/ecommerce/analog-classic.jpg"
    },
    {
      "id": 2,
      "title": "Wireless Headphones",
      "description": "High-quality wireless headphones for an immersive music experience.",
      "price": 89.99,
      "image": "https://example.com/images/wireless-headphones.jpg"
    },
    {
      "id": 3,
      "title": "Fast Charger",
      "description": "Quickly charge your devices with this efficient fast charger.",
      "price": 19.99,
      "image": "https://example.com/images/fast-charger.jpg"
    },
    {
      "id": 4,
      "title": "Ergonomic Keyboard",
      "description": "A comfortable and efficient keyboard designed for productivity.",
      "price": 64.99,
      "image": "https://example.com/images/ergonomic-keyboard.jpg"
    },
    {
      "id": 5,
      "title": "Gaming Mouse",
      "description": "Enhance your gaming experience with this high-performance gaming mouse.",
      "price": 39.99,
      "image": "https://example.com/images/gaming-mouse.jpg"
    }
  ]

  return (
    <div className='mt-40 grid grid-cols-4 gap-5 align-middle'>
      {
          products.map( product => (
              <ProductCard 
                  key={ product.id }
                  product={ product }
                  className="bg-dark text-white"
                  onChange={ onProductCountChange }
                  value={ shoppingCart[product.id]?.count || 0 }
              >
                  <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                  <ProductTitle className="text-bold" />
                  <ProductButtons className="custom-buttons" />
              </ProductCard>
          ))
      }
  </div>
  )
}
