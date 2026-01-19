"use client";
import React from "react";
import Image from "next/image";
import cat1 from "../../public/birthday.webp";
import cat2 from "../../public/annivarsary.webp";
import cat3 from "../../public/wedding.jpg";
import cat4 from "../../public/get_well_soon.webp";

const categories = [
  { name: "Birthday", img: cat1 },
  { name: "Anniversary", img: cat2 },
  { name: "Wedding", img: cat3 },
  { name: "Get Well Soon", img: cat4 },
];

const Categories = () => {
  return (
    <section className="py-16 my-80">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">
          Shop by Occasion
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
            >
              <Image
                src={cat.img}
                alt={cat.name}
                className="w-full h-40 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-pink-600 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-lg font-bold">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
