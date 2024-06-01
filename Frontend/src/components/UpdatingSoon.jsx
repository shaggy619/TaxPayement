import React from "react";
import {
  FaUser,
  FaIndustry,
  FaHandsHelping,
  FaGlobe,
  FaFileInvoiceDollar,
  FaHome,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

const UpdatingSoon = () => {
  const services = [
    {
      title: "Family",
      icon: <FaHome />,
      description:
        "Get comprehensive tax management services tailored for families.",
    },
    {
      title: "Tax Deduction",
      icon: <FaFileInvoiceDollar />,
      description:
        "Manage tax deductions and withholdings accurately and efficiently.",
    },
    {
      title: "Trust",
      icon: <FaHandsHelping />,
      description:
        "Ensure compliance and proper tax filing for trusts and charitable organizations.",
    },
  ];
  return (
    <div className="bg-gray-200 font-sans leading-normal tracking-normal mt-36">
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center w-[90%]">
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="text-4xl font-bold mb-6">
                We're updating these features soon
              </h1>
              <p className="text-gray-600 mb-12">
                Enter your email to be the first to know when we launch.
              </p>
            </motion.div>

            <motion.form
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-md mx-auto"
            >
              <div className="flex items-center">
                <input
                  type="email"
                  className="bg-gray-100 mr-3 py-3 px-6 w-full rounded-md border border-gray-200 outline-none  focus:border-primary focus:bg-white"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="bg-primary text-white py-3 px-6 rounded-md hover:bg-secondary focus:outline-none "
                >
                  Subscribe
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4 w-[90%]">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="text-3xl font-bold mb-6"
            >
              What to Expect
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="text-gray-600 mb-12"
            >
              Our upcoming income tax payment features will offer comprehensive
              family tax management, precise handling of tax deductions, and
              compliance services for trusts and charities. Stay tuned for a
              seamless experience.
            </motion.p>
          </div>
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
        </div>
      </section>
    </div>
  );
};

export default UpdatingSoon;
