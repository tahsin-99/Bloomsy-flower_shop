"use client";
import React from "react";
import Image from "next/image";
import product1 from "../../public/red roses bouquet.jpg";
import product2 from "../../public/pink_tulip.webp";
import product3 from "../../public/sunflower.webp";
import product4 from "../../public/mixed_flowers.jpg";

const products = [
  { name: "Red Roses Bouquet", price: "$29", img: product1 },
  { name: "Pink Tulips", price: "$25", img: product2 },
  { name: "Sunflower Bundle", price: "$20", img: product3 },
  { name: "Mixed Flowers Basket", price: "$35", img: product4 },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-pink-50 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <Image
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-pink-700">
                {product.name}
              </h3>
              <p className="text-pink-600 font-bold mb-2">{product.price}</p>
              <button className="btn btn-primary w-full">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
