"use client";
import React from "react";

const Promotions = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 my-80 rounded-sm">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-4">
          Special Offers
        </h2>
        <p className="text-pink-600 mb-6">
          Get up to 30% off on selected bouquets. Limited time only!
        </p>
        <button className="btn btn-primary text-white hover:scale-105 transition-transform">
          Shop Sale
        </button>
      </div>
    </section>
  );
};

export default Promotions;
