import React from "react";
import Link from "next/link";

const TermsPage = () => {
  return (
    <div className="mt-20 px-6 md:w-10/12 mx-auto font-sans my-20">
      <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">
        Terms of Use
      </h1>

      <p className="text-gray-700 mb-4">
        Welcome to Bloomsy! By accessing or using our website, you agree to comply 
        with these Terms of Use. Please read them carefully before using our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Website</h2>
      <p className="text-gray-700 mb-4">
        You agree to use our website for lawful purposes only. You may not use 
        the site to transmit or distribute any harmful or illegal content.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Account Responsibility</h2>
      <p className="text-gray-700 mb-4">
        If you create an account on Bloomsy, you are responsible for maintaining 
        the confidentiality of your account and password, and for all activities 
        that occur under your account.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Product Information</h2>
      <p className="text-gray-700 mb-4">
        We try to ensure all flower listings are accurate, but we do not guarantee 
        that the information, images, or prices are complete, reliable, or error-free.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        Bloomsy is not responsible for any damages arising from the use or inability 
        to use the website or products purchased. All purchases are at your own risk.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
      <p className="text-gray-700 mb-4">
        We may update these Terms of Use from time to time. Continued use of the 
        website means you accept the updated terms.
      </p>

      <p className="text-gray-700 mt-6">
        Back to <Link href="/" className="text-pink-600 underline">Home</Link>
      </p>
    </div>
  );
};

export default TermsPage;
