import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";

const Teams = () => {
  const teamMembers = [
    {
      name: "Samyam Adhikari",
      role: "Frontend Developer",
      imgSrc: "/img/samyam.png",
      social: {
        facebook: "john.doe",
        twitter: "john_doe",
        linkedin: "john-doe",
      },
    },
    {
      name: "Ronish Prajapati",
      role: "Backend Developer",
      imgSrc: "https://spacema-dev.com/elevate/assets/images/team/1.jpg",
      social: {
        facebook: "jane.smith",
        twitter: "jane_smith",
        linkedin: "jane-smith",
      },
    },
    {
      name: "Sushant Luitel",
      role: "Full Stack Developer",
      imgSrc: "https://spacema-dev.com/elevate/assets/images/team/3.jpg",
      social: {
        facebook: "alex.johnson",
        twitter: "alex_johnson",
        linkedin: "alex-johnson",
      },
    },
    {
      name: "Srijan Ghimire",
      role: "Project Manager",
      imgSrc: "https://spacema-dev.com/elevate/assets/images/team/2.jpg",
      social: {
        facebook: "peter.johnson",
        twitter: "peter_johnson",
        linkedin: "peter-johnson",
      },
    },
  ];

  return (
    <section id="our-team" className="bg-gray-100 py-12">
      <div className="w-[90%] mx-auto ">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center pb-2"
        >
          <span class="text-primary font-bold text-2xl md:text-3xl relative inline-block stroke-current">
            Our Teams
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 my-6 text-center"
            >
              <div className="w-[200px] h-[200px] relative overflow-hidden rounded-full mx-auto">
                <img
                  src={member.imgSrc}
                  alt={`Team Member ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold my-2 text-primary">
                {member.name}
              </h3>
              <p className="text-gray-700">Role: {member.role}</p>
              <div className="flex justify-center mt-4">
                <a
                  href={`https://facebook.com/${member.social.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 mr-4 text-xl hover:text-primary"
                >
                  <FaFacebook />
                </a>
                <a
                  href={`https://twitter.com/${member.social.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 mr-4 text-xl hover:text-primary"
                >
                  <FaTwitter />
                </a>
                <a
                  href={`https://linkedin.com/in/${member.social.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 text-xl hover:text-primary"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Teams;
