import React from "react";
import {
  FaUser,
  FaBuilding,
  FaIndustry,
  FaHandsHelping,
  FaGlobe,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

const services = [
  {
    title: "Individual",
    icon: <FaUser />,
    description:
      "File your personal income tax returns with ease and accuracy.",
  },
  {
    title: "Firm/LLP/AOP/BOP",
    icon: <FaBuilding />,
    description:
      "Manage tax compliance and filing for your firm, LLP, AOP, or BOP.",
  },
  {
    title: "Company",
    icon: <FaIndustry />,
    description:
      "Handle corporate tax matters efficiently with our comprehensive solutions.",
  },
  {
    title: "Trust",
    icon: <FaHandsHelping />,
    description:
      "Ensure compliance and proper tax filing for trusts and charitable organizations.",
  },
  {
    title: "Non-Resident",
    icon: <FaGlobe />,
    description:
      "Get assistance with tax matters and filing for non-resident individuals and entities.",
  },
  {
    title: "Tax Deduction",
    icon: <FaFileInvoiceDollar />,
    description:
      "Manage tax deductions and withholdings accurately and efficiently.",
  },
];

const ServiceCards = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="flex justify-center py-2"
      >
        <span class="text-primary font-bold text-2xl md:text-3xl relative inline-block stroke-current">
          Services
          <svg
            class="absolute -bottom-0.5 w-full max-h-1.5"
            viewBox="0 0 55 5"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
              stroke-width="2"
            ></path>
          </svg>
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center gap-6 p-6"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 w-64 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="text-4xl text-primary flex justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default ServiceCards;
