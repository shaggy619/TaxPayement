import React from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";

const Payment = () => {
  const handlePayment = () => {
    // Logic for Khalti payment integration can go here
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-8 my-36 mt-44">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Total Tax To be Paid
      </h1>
      <div className="flex items-center justify-between mb-8 px-4 py-2 bg-gray-100 rounded-md shadow-sm">
        <span className="text-lg text-gray-600">Total Tax:</span>
      </div>
      <button
        onClick={handlePayment}
        className="w-full flex items-center justify-center bg-primary hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-[1.01]"
      >
        <FaMoneyCheckAlt className="mr-2" />
        Pay with Khalti
      </button>
    </div>
  );
};

export default Payment;
