import React from "react";
import Waves from "./HomeLine";
import { SiPolestar } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import PixelTransition from "./PixelMain";

const Home = () => {
  return (
    <div className="p-3 bg-[#160000] ">
      {/* first section */}
      <div className="border border-[#160000] bg-[#F40C3F] w-full min-h-screen">
        <nav className="text-black flex items-center justify-between px-4 md:py-5 relative border-b border-[#160000]">
          {/* Left Icon with Line */}
          <div className="flex items-center">
            <img
              src="src/images/logo2.png"
              alt="Logo"
              className="md:w-20 md:h-20 w-10 h-8"
            />
            <div className="w-px h-20 bg-[#160000] mx-2"></div>
          </div>

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

        {/* Waves Section with responsive height */}
        <div className="mt-5 md:mt-4 relative h-[390px] md:h-[450px]">
          <Waves />
        </div>

        <div className="border mt-5 border-[#160000]"></div>

        {/* Title Section - Stacked on mobile */}
        <div className="text-[#160000] flex flex-col md:flex-row items-center text-6xl md:text-9xl font-bold p-3 tracking-tighter gap-3 font-homepage">
          <h3>FULLSTACK</h3>
          <SiPolestar className="hidden md:block" />
          <h3>DEVELOPER</h3>
        </div>
      </div>

      {/* about section */}
      <div className="bg-[#F40C3F] w-full min-h-screen p-1">
        <div className="mt-10 border border-black rounded-md max-w-6xl mx-auto">
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

            <div className="text-center mt-28">
              <h3 className="text-7xl font-bold font-heading">SKILL SET</h3>
            </div>
          </div>

          <div className="text-center">
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

      {/* work section */}
      <div className="bg-[#F40C3F] w-full min-h-screen p-1">
        <div className="mt-10 border border-black rounded-md max-w-6xl mx-auto">
          <div className="p-10">
            <div className="text-center">
              <h3 className="text-7xl font-bold font-heading">WORK</h3>
            </div>
          </div>

          <div className="w-full flex flex-wrap gap-5 p-3 pb-5 items-center justify-center">
            <div className="w-[30%] h-1/2 flex items-center justify-center text-white font-seminbold text-lg">
              <PixelTransition
                firstContent={
                  <img
                    src="https://images.unsplash.com/photo-1739036462754-6e86520998a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
                    alt="default pixel transition content, a cat!"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#F40C3F",
                    }}
                  >
                    <p
                      className="font-aboutText"
                      style={{
                        fontWeight: 900,
                        fontSize: "3rem",
                        color: "black",
                      }}
                    >
                      Meow!
                    </p>
                  </div>
                }
                gridSize={12}
                pixelColor="black"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>

            <div className="w-[30%] h-1/2 flex items-center justify-center text-white font-seminbold text-lg">
              <PixelTransition
                firstContent={
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                    alt="default pixel transition content, a cat!"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#F40C3F",
                    }}
                  >
                    <p
                      className="font-aboutText"
                      style={{
                        fontWeight: 900,
                        fontSize: "3rem",
                        color: "black",
                      }}
                    >
                      Meow!
                    </p>
                  </div>
                }
                gridSize={12}
                pixelColor="black"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>

            <div className="w-[30%] h-1/2 flex items-center justify-center text-white font-seminbold text-lg">
              <PixelTransition
                firstContent={
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                    alt="default pixel transition content, a cat!"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#F40C3F",
                    }}
                  >
                    <p
                      className="font-aboutText"
                      style={{
                        fontWeight: 900,
                        fontSize: "3rem",
                        color: "black",
                      }}
                    >
                      Meow!
                    </p>
                  </div>
                }
                gridSize={12}
                pixelColor="black"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>

            <div className="w-[30%] h-1/2 flex items-center justify-center text-white font-seminbold text-lg">
              <PixelTransition
                firstContent={
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                    alt="default pixel transition content, a cat!"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#F40C3F",
                    }}
                  >
                    <p
                      className="font-aboutText"
                      style={{
                        fontWeight: 900,
                        fontSize: "3rem",
                        color: "black",
                      }}
                    >
                      Meow!
                    </p>
                  </div>
                }
                gridSize={12}
                pixelColor="black"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>

            <div className="w-[61%] h-1/2 flex items-center justify-center text-white font-seminbold text-lg">
              <PixelTransition
                aspectRatio="50%"
                firstContent={
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                    alt="default pixel transition content, a cat!"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#F40C3F",
                    }}
                  >
                    <p
                      className="font-aboutText"
                      style={{
                        fontWeight: 900,
                        fontSize: "3rem",
                        color: "black",
                      }}
                    >
                      Meow!
                    </p>
                  </div>
                }
                gridSize={12}
                pixelColor="black"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
