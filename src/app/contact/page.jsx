"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!"); // placeholder, replace with backend logic
  };

  return (
    <section className="bg-pink-50 py-16 my-60">
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-pink-700 mb-8 text-center">
          Have questions or want to place a custom order? Send us a message!
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            rows={5}
            required
          />
          <button
            type="submit"
            className="btn btn-primary text-white w-full hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
