import React from "react";
import flowers from "@/data/flowers.json";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="mt-20 px-6 font-sans my-60">
      <h2 className="text-4xl font-bold text-pink-600 text-center mb-10">
        All Flowers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {flowers.map((flower) => (
          <div
            key={flower.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition p-4 flex flex-col"
          >
            <Image
            width={200}
            height={180}
              src={flower.image}
              alt={flower.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-pink-700 mb-2">
              {flower.name}
            </h3>
            
            <p className="text-pink-600 font-bold text-lg mt-auto">
              ${flower.price}
            </p>
            <Link href={`/all-flowers/${flower.id}`} >
             <button className="btn btn-primary mt-4 w-full">View Details</button> 
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
