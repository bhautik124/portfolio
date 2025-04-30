import React, { useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="p-3 bg-[#160000] ">
      {/* first section */}
      <div className="border border-[#160000] bg-[linear-gradient(135deg,_#ffffff,_#e6f0ff)] w-full">
        <nav className="text-black flex items-center justify-between px-4 md:py-5 relative border-b border-[#160000]">
          {/* Left Icon with Line */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center">
              <img
                src="/images/logo2.png"
                alt="Logo"
                className="md:w-20 md:h-20 w-10 h-8"
              />
              <div className="w-px h-20 bg-[#160000] mx-2"></div>
            </div>
          </Link>

          {/* Center Text - Fixed */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 items-center cursor-pointer">
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

          {/* Right icons */}
          <div className="flex-shrink-0 flex items-center text-[#160000] text-3xl md:text-7xl">
            {/* LinkedIn */}
            <div className="flex items-center">
              <div className="w-px h-20 bg-[#160000] mx-2"></div>
              <a
                href="https://www.linkedin.com/in/bhautik-sangani-38781b257"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin className="cursor-pointer" />
              </a>
              <div className="w-px h-20 bg-[#160000] mx-2"></div>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <div className="w-px h-20 bg-[#160000] mx-2"></div>
              <a href="mailto:sanganibhumit421@gmail.com">
                <MdOutlineEmail className="cursor-pointer" />
              </a>
              <div className="w-px h-20 bg-[#160000] mx-2"></div>
            </div>

            {/* GitHub */}
            <div className="flex items-center">
              <div className="w-px h-20 bg-[#160000] mx-2"></div>
              <a
                href="https://github.com/bhautik124"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="cursor-pointer" />
              </a>
              <div className="w-px h-20 bg-[#160000] mx-2"></div>
            </div>
          </div>
        </nav>
      </div>

      {/* all section */}
      <div className="bg-[linear-gradient(135deg,_#ffffff,_#e6f0ff)] w-full min-h-screen p-1 pb-10">
        <div className="mt-10 border border-black rounded-md max-w-6xl mx-auto">
          {/* about section */}
          <div className="p-10">
            <div className="text-center">
              <h3 className="text-7xl font-bold font-heading">ABOUT ME</h3>
            </div>

            <div className="text-start mt-10">
              <h3 className="leading-normal	 font-normal text-3xl font-aboutText">
                Hi, I’m Bhautik Sangani—a Fullstack Developer building dynamic
                web experiences with the MERN stack. I bridge creativity and
                code to craft scalable solutions, blending modern tools
                (React.js, TypeScript). Let’s not just write software—let’s
                engineer innovation that users love. Ready to redefine what’s
                possible?
              </h3>
            </div>
          </div>

          {/* skill section */}
          <div className=" mt-20">
            <div className="text-center">
              <h3 className="text-7xl font-bold font-heading">SKILL SET</h3>
            </div>
            <div className="text-center mt-10">
              <div className="w-full  p-5 rounded-md border border-black">
                <h3 className="text-3xl uppercase font-normal font-aboutText">
                  {" "}
                  Frontend <br />{" "}
                  <span className="block mt-4 text-7xl font-black">
                    HTML, CSS, JavaScript
                  </span>
                </h3>
              </div>
              <div className="w-full p-5 rounded-md border border-black">
                <h3 className="text-3xl uppercase font-normal font-aboutText">
                  Frameworks & Libraries <br />{" "}
                  <span className="block mt-4 text-7xl font-black">
                    React.js, TypeScript
                  </span>
                </h3>
              </div>
              <div className="w-full p-5 rounded-md border border-black">
                <h3 className="text-3xl uppercase font-normal font-aboutText">
                  Backend <br />
                  <span className="block mt-4 text-7xl font-black">
                    Node.js, Express.js, MongoDB
                  </span>
                </h3>
              </div>
              <div className="w-full p-5 rounded-md border border-black">
                <h3 className="text-3xl uppercase font-normal font-aboutText">
                  Architecture <br />
                  <span className="block mt-4 text-7xl font-black">
                    Microservices
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
