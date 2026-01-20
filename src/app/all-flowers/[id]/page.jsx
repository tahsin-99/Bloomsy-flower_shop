"use client";

import React from "react";
import { useParams } from "next/navigation";
import flowers from "@/data/flowers.json";
import Image from "next/image";
import Link from "next/link";

const FlowerDetails = () => {
  const params = useParams();
  const id = params.id;

  const flower = flowers.find((f) => f.id === parseInt(id, 10));

  if (!flower) {
    return (
      <p className="text-center mt-20 text-lg text-red-500">
        Flower not found!
      </p>
    );
  }

  return (
    <div className="mt-20 px-6 font-sans my-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-pink-600 mb-6 text-center">
        {flower.name}
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <Image
          src={flower.image}
          width={400}
          height={300}
          alt={flower.name}
          className="rounded-lg object-cover"
        />
        <div className="flex-1">
          <p className="text-gray-700 mb-4">{flower.description}</p>
          <p className="text-pink-600 font-bold text-2xl mb-4">
            ${flower.price}
          </p>
          <button className="btn btn-primary w-full mb-4">Book Now</button>
          <Link href="/all-flowers" className="btn btn-outline w-full">
            Back to All Flowers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlowerDetails;
