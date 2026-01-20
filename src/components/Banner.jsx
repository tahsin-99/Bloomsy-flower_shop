"use client";

import React from "react";
import Image from "next/image";
import bannerImage from "../../public/banner.avif"; 
import Link from "next/link";


const Banner = () => {
  return (
    <section className="my-80">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 px-6 py-16">
        
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-pink-600 mb-4">
            Bloomsy Flowers
          </h1>
          <p className="text-pink-700 mb-6">
            Fresh flowers for every occasion. Make every moment special with our beautiful arrangements.
          </p>
          <Link href={'/all-flowers'} className="btn btn-primary btn-lg text-white">
            Shop Now
          </Link>
        </div>

        {/* Right image */}
        <div className="flex-1">
          <Image
            src={bannerImage}
            alt="Fresh flowers"
            className="w-full rounded-lg shadow-lg"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
