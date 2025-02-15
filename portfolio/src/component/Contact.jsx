import React, { useEffect } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import FallingText from "./gravity text/FallingText";
import { motion } from "framer-motion";
import DecryptedText from "./decrypt text/Decrypted";
const Contact = ({ onClose }) => {
  return (
    <div className="p-3 bg-[#160000] ">
      {/* first section */}
      <div className="border border-[#160000] bg-[#F40C3F] w-full">
        <nav className="text-black flex items-center justify-between px-4 md:py-5 relative border-b border-[#160000]">
          {/* Left Icon with Line */}
          <Link to="/">
            <div className="flex items-center">
              <img
                src="src/images/logo2.png"
                alt="Logo"
                className="md:w-20 md:h-20 w-10 h-8"
              />
              <div className="w-px h-20 bg-[#160000] mx-2"></div>
            </div>
          </Link>

          {/* Center Text */}
          <div className="flex gap-10 justify-center items-center cursor-pointer">
            <div className="w-px h-20 bg-[#160000] mx-2"></div>
            <Link to="/about">
              <h1 className="md:text-4xl text-3xl font-bold tracking-tight font-heading text-[#160000]">
                ABOUT
              </h1>
            </Link>
            <Link to="/work">
              <h1 className="md:text-4xl text-3xl font-bold tracking-wide font-heading text-[#160000]">
                WORK
              </h1>
            </Link>
            <Link to="/contact">
              <h1 className="md:text-4xl text-3xl font-bold tracking-wide font-heading text-[#160000]">
                CONTACT
              </h1>
            </Link>
            <div className="w-px h-20 bg-[#160000] mx-2"></div>
          </div>

          {/* Right QR Code with Line */}
          <div className="flex items-center text-[#160000] text-3xl md:text-7xl">
            <div className="w-px h-20 bg-[#160000] mx-2"></div>
            <a href="mailto:sanganibhumit421@gmail.com">
              <MdOutlineEmail className="cursor-pointer" />
            </a>
          </div>
        </nav>
      </div>

      {/* all section */}
      <div className="bg-[#F40C3F] w-full min-h-screen p-1 pb-10">
        <div className="mt-10 border border-black rounded-md max-w-6xl mx-auto">
          {/* contact section */}
          <div className="mt-10  w-full h-screen relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full h-screen pointer-events-none"
            >
              <FallingText
                text={`&#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2`}
                highlightWords={[
                  "React",
                  "Bits",
                  "animated",
                  "components",
                  "simplify",
                ]}
                highlightClass="highlighted"
                trigger="scroll"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.25}
                fontSize="2rem"
                mouseConstraintStiffness={0.9}
              />
            </motion.div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full text-center cursor-pointer">
              <div className="w-1/2 text-8xl font-bold font-aboutText uppercase mx-auto">
                <a
                  href="mailto:sanganibhumit421@gmail.com"
                  className="group flex flex-col items-center"
                >
                  <span className="relative inline-block after:block after:h-1 after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out group-hover:after:w-full">
                    <DecryptedText
                      text="Let's work"
                      animateOn="view"
                      revealDirection="center"
                      speed={50}
                    />
                  </span>
                  <span className="relative inline-block after:block after:h-1 after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out group-hover:after:w-full">
                    <DecryptedText
                      text="together!"
                      animateOn="view"
                      revealDirection="center"
                      speed={50}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
