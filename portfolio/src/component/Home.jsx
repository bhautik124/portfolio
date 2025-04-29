import React from "react";
import Waves from "./home wawes/HomeLine";
import { SiPolestar, SiLinkedin } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Magnet from "./button animation/Buton";
import FallingText from "./gravity text/FallingText";
import { motion } from "framer-motion";
import DecryptedText from "./decrypt text/Decrypted";

const Home = () => {
  return (
    <div className="p-1 sm:p-3 bg-black">
      {/* First Section */}

      <div className="border border-black bg-[linear-gradient(135deg,_#ffffff,_#e6f0ff)] w-full min-h-full">
        {/* Desktop Navbar (Hidden on Mobile) */}
        <nav className="hidden sm:flex text-black items-center justify-between px-4 py-5 border-b border-black">
          {/* Left Section */}
          <Link to="/" className="flex items-center">
            <img src="images/logo2.png" alt="Logo" className="w-20 h-20" />
            <div className="w-px h-20 bg-black mx-2"></div>
          </Link>

          {/* Center Links */}
          <div className="flex gap-10 items-center">
            <div className="w-px h-20 bg-black"></div>
            <Link to="/about" className="text-4xl font-heading">
              ABOUT
            </Link>
            <Link to="/work" className="text-4xl font-heading">
              WORK
            </Link>
            <Link to="/contact" className="text-4xl font-heading">
              CONTACT
            </Link>
            <div className="w-px h-20 bg-black"></div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 text-7xl">
            <div className="w-px h-20 bg-black"></div>
            <a
              href="https://www.linkedin.com/in/bhautik-sangani-38781b257"
              target="_blank"
            >
              <SiLinkedin className="text-7xl p-2" />
            </a>
            <div className="w-px h-20 bg-black"></div>
            <a href="mailto:sanganibhumit421@gmail.com">
              <MdOutlineEmail />
            </a>
            <div className="w-px h-20 bg-black"></div>
          </div>
        </nav>

        {/* Mobile Navbar (10% Height) */}
        <div className="sm:hidden flex justify-between items-center px-4 h-[10vh] border-b border-black">
          {/* Left Logo + Line */}
          <div className="flex items-center">
            <img src="src/images/logo2.png" alt="Logo" className="w-12 h-10" />
            <div className="w-px h-14 bg-black mx-3"></div>
          </div>

          {/* Right Icons with Lines */}

          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <div className="w-px h-12 bg-black"></div>
              <a
                href="https://www.linkedin.com/in/bhautik-sangani-38781b257"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin className="text-4xl mx-3" />
              </a>
              <div className="w-px h-12 bg-black"></div>
            </div>
            <div className="flex items-center">
              <div className="w-px h-12 bg-black"></div>
              <a href="mailto:sanganibhumit421@gmail.com">
                <MdOutlineEmail className="text-5xl mx-3" />
              </a>
              <div className="w-px h-12 bg-black"></div>
            </div>
          </div>
        </div>

        {/* Waves Section (60% Height on Mobile) */}
        <div className="h-[60vh] sm:h-[450px] relative">
          <Waves />
          <div className="absolute bottom-0 w-full border-t border-black"></div>
        </div>

        {/* Title Section (25% Height on Mobile) */}
        <div className=" h-[23vh] sm:h-[18vh] lg:h-[26vh] flex flex-col sm:flex-row items-center justify-center text-6xl sm:text-5xl md:text-[8vw] font-bold gap-3 font-homepage tracking-tighter text-black">
          <h3 className="sm:pl-2">FULLSTACK</h3>
          <SiPolestar className="hidden sm:block" />
          <h3 className="pr-2 sm:pr-3">DEVELOPER</h3>
        </div>
      </div>

      {/* Rest of the code remains same as before */}

      <div className="bg-[linear-gradient(135deg,_#ffffff,_#e6f0ff)] w-full min-h-screen p-1 pb-10 text-black">
        <div className="mt-5 sm:mt-10 border border-black rounded-md max-w-6xl mx-auto">
          {/* About Section */}
          <div className="p-4 sm:p-10">
            <div className="text-center">
              <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading">
                ABOUT ME
              </h3>
            </div>

            <div className="text-start mt-5 sm:mt-10">
              <h3 className="leading-normal font-normal text-lg sm:text-2xl md:text-3xl font-aboutText">
                Hi, I’m Bhautik Sangani—a Fullstack Developer building dynamic
                web experiences with the MERN stack. I bridge creativity and
                code to craft scalable solutions, blending modern tools
                (React.js, TypeScript). Let’s not just write software—let’s
                engineer innovation that users love. Ready to redefine what’s
                possible?
              </h3>
            </div>
          </div>

          {/* Skill Section */}
          <div className="mt-10 sm:mt-20">
            <div className="text-center">
              <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading">
                SKILL SET
              </h3>
            </div>
            <div className="text-center mt-5 sm:mt-10 grid gap-2 sm:gap-4">
              <div className="w-full mb-2 p-3 sm:p-5 rounded-md border border-black">
                <h3 className="text-xl sm:text-3xl uppercase font-normal font-aboutText">
                  Frontend <br />
                  <span className="block mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-7xl font-black">
                    HTML, CSS, JavaScript
                  </span>
                </h3>
              </div>
              <div className="w-full mb-2 p-3 sm:p-5 rounded-md border border-black">
                <h3 className="text-xl sm:text-3xl uppercase font-normal font-aboutText">
                  Frameworks & Libraries <br />
                  <span className="block mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-7xl font-black">
                    React.js, TypeScript
                  </span>
                </h3>
              </div>
              <div className="w-full mb-2 p-3 sm:p-5 rounded-md border border-black">
                <h3 className="text-xl sm:text-3xl uppercase font-normal font-aboutText">
                  Backend <br />
                  <span className="block mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-7xl font-black">
                    Node.js, Express.js, MongoDB
                  </span>
                </h3>
              </div>
              <div className="w-full mb-2 p-3 sm:p-5 rounded-md border border-black">
                <h3 className="text-xl sm:text-3xl uppercase font-normal font-aboutText">
                  Architecture <br />
                  <span className="block mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-7xl font-black">
                    Microservices
                  </span>
                </h3>
              </div>
            </div>
          </div>

          {/* Work Section */}
          <div className="mt-10 sm:mt-20">
            <div className="text-center">
              <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading">
                WORK
              </h3>
            </div>
            <div className="text-center mt-5 sm:mt-10 pb-5 sm:pb-10">
              <Link to="/work">
                <Magnet padding={30} disabled={false} magnetStrength={2}>
                  <button className="px-4 sm:px-6 py-2 sm:py-3 text-black font-bold text-base sm:text-lg rounded-md border-2 border-black shadow-lg">
                    Click to See!
                  </button>
                </Magnet>
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-10 border border-black w-full h-[60vh] lg:h-screen relative overflow-hidden">
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
                gravity={0.65}
                fontSize="clamp(1rem, 2vw, 2rem)"
                mouseConstraintStiffness={0.9}
              />
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full text-center cursor-pointer">
              <div className="w-11/12 sm:w-3/4 md:w-1/2 text-6xl sm:text-4xl md:text-6xl lg:text-8xl font-bold font-aboutText uppercase mx-auto">
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

export default Home;
