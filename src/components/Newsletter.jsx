"use client";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 border border-primary rounded-sm mb-80">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-pink-600 mb-6">
          Get the latest deals and flower tips delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-primary text-white">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
