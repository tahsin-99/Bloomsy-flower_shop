"use client";
import React from "react";

const testimonials = [
  {
    name: "Sarah J.",
    text: "Beautiful flowers, fast delivery. Loved the arrangement!",
  },
  {
    name: "Michael R.",
    text: "The perfect gift for my anniversary. Highly recommend!",
  },
  {
    name: "Emily K.",
    text: "Great quality flowers and excellent customer service.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white mb-80">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className=" border border-primary p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="text-pink-700 mb-4">&quot;{t.text}&quot;</p>
              <h3 className="font-bold text-pink-600">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
