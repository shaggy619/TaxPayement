import React, { useEffect } from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";

const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handlePayment = () => {
    // Logic for Khalti payment integration can go here
  };

  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-white shadow-xl rounded-lg text-gray-900 mt-40 mb-12">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://i.pinimg.com/736x/3f/11/30/3f11304b704850cb6ad8e27e6a3a56cb.jpg"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32"
          src="./src/assets/user.png"
          alt="Woman looking front"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">Samyam Adhikari</h2>
        <p className="text-gray-500">Individual</p>
      </div>
      <div className="max-md:w-[90%] w-[85%] mx-auto pb-8">
        <h2 className="text-2xl font-semibold text-gray-800 my-6 text-center">
          Total Tax To be Paid
        </h2>
        <div className="flex items-center justify-between mb-8 px-4 py-2 bg-gray-100 rounded-md shadow-sm">
          <span className="text-lg text-gray-600">Total Tax:</span>
        </div>
        <button
          onClick={handlePayment}
          className="w-full flex items-center justify-center bg-primary  text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-[1.01]"
        >
          <FaMoneyCheckAlt className="mr-2" />
          Pay with Khalti
        </button>
      </div>
    </div>
  );
};

export default Payment;
