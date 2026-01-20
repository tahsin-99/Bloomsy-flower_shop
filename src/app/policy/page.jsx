import React from "react";
import Link from "next/link";

const PrivacyPage = () => {
  return (
    <div className="mt-20 px-6 md:w-10/12 mx-auto font-sans my-20">
      <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">
        Privacy Policy
      </h1>

      <p className="text-gray-700 mb-4">
        Bloomsy values your privacy. This policy explains what personal information 
        we collect, how we use it, and your rights regarding your information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We may collect your name, email address, phone number, and payment details 
        when you place an order or create an account.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Use of Information</h2>
      <p className="text-gray-700 mb-4">
        Your information is used to process orders, communicate with you, improve 
        our services, and send promotions if you have opted in.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Sharing Information</h2>
      <p className="text-gray-700 mb-4">
        We do not sell your personal information. We may share information with 
        trusted service providers to help with order fulfillment and website operations.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Cookies</h2>
      <p className="text-gray-700 mb-4">
        Our website uses cookies to enhance your experience and for analytics purposes. 
        You can control cookies via your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="text-gray-700 mb-4">
        You have the right to access, update, or delete your personal information. 
        Contact us at support@cst.com for any requests.
      </p>

      <p className="text-gray-700 mt-6">
        Back to <Link href="/" className="text-pink-600 underline">Home</Link>
      </p>
    </div>
  );
};

export default PrivacyPage;
