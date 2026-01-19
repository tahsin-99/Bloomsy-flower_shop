"use client";
import React from "react";

const steps = [
  { title: "Choose Flowers", description: "Pick your favorite bouquet." },
  { title: "Customize", description: "Add a card or special note." },
  { title: "Fast Delivery", description: "Get flowers delivered quickly." },
  { title: "Enjoy", description: "Brighten someone’s day!" },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-pink-50 mb-80">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-pink-700 mb-2">
                {step.title}
              </h3>
              <p className="text-pink-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
