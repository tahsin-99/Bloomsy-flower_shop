"use client";

import React from "react";
import Image from "next/image";
import aboutImage from "../../../public/banner.avif"; // 

const About = () => {
  return (
    <section className="bg-pink-50 py-16 my-60">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 px-6">
        
        {/* Left Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-pink-600 mb-4">About Bloomsy</h1>
          <p className="text-pink-700 mb-4">
            At Bloomsy Flowers, we believe every moment is special and deserves
            beautiful flowers. From birthdays to weddings, our fresh arrangements
            bring joy and color to any occasion.
          </p>
          <p className="text-pink-700 mb-6">
            Our mission is to deliver happiness in every bouquet with care, quality,
            and love for flowers. We source the freshest blooms daily to ensure
            our customers always get the best.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src={aboutImage}
            alt="About Bloomsy"
            className="rounded-lg shadow-lg w-full"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
