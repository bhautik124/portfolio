// import React, { useEffect } from "react";
// import Waves from "./home wawes/HomeLine";
// import { SiPolestar } from "react-icons/si";
// import { MdOutlineEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
// import Magnet from "./button animation/Buton";
// import FallingText from "./gravity text/FallingText";
// import { motion } from "framer-motion";
// import DecryptedText from "./decrypt text/Decrypted";
// const Home = () => {
//   return (
//     <div className="p-3 bg-black ">
//       {/* first section */}
//       <div className="border border-black bg-[#F40C3F] w-full min-h-screen">
//         <nav className="text-black flex items-center justify-between px-4 md:py-5 relative border-b border-black">
//           {/* Left Icon with Line */}
//           <Link to="/">
//             <div className="flex items-center">
//               <img
//                 src="src/images/logo2.png"
//                 alt="Logo"
//                 className="md:w-20 md:h-20 w-10 h-8"
//               />
//               <div className="w-px h-20 bg-black mx-2"></div>
//             </div>
//           </Link>

//           {/* Center Text */}
//           <div className="flex gap-10 justify-center items-center cursor-pointer">
//             <div className="w-px h-20 bg-black mx-2"></div>
//             <Link to="/about">
//               <h1 className="md:text-4xl text-3xl font-bold tracking-tight font-heading text-black">
//                 ABOUT
//               </h1>
//             </Link>
//             <Link to="/work">
//               <h1 className="md:text-4xl text-3xl font-bold tracking-wide font-heading text-[#160000]">
//                 WORK
//               </h1>
//             </Link>
//             <Link to="/contact">
//               <h1 className="md:text-4xl text-3xl font-bold tracking-wide font-heading text-[#160000]">
//                 CONTACT
//               </h1>
//             </Link>
//             <div className="w-px h-20 bg-[#160000] mx-2"></div>
//           </div>

//           {/* Right QR Code with Line */}
//           <div className="flex items-center text-[#160000] text-3xl md:text-7xl">
//             <div className="w-px h-20 bg-[#160000] mx-2"></div>
//             <a href="mailto:sanganibhumit421@gmail.com">
//               <MdOutlineEmail className="cursor-pointer" />
//             </a>
//           </div>
//         </nav>

//         {/* Waves Section with responsive height */}
//         <div className="mt-5 md:mt-4 relative h-[390px] md:h-[450px]">
//           <Waves />
//         </div>

//         <div className="border mt-5 border-[#160000]"></div>

//         {/* Title Section - Stacked on mobile */}
//         <div
//           className="text-[#160000] flex flex-col md:flex-row items-center text-6xl md:text-[8vw] font-bold p-2 tracking-tight gap-3 font-homepage"
//           style={{ lineHeight: "1.5" }}
//         >
//           <h3>FULLSTACK</h3>
//           <SiPolestar className="hidden md:block" />
//           <h3>DEVELOPER</h3>
//         </div>
//       </div>

//       {/* all section */}
//       <div className="bg-[#F40C3F] w-full min-h-screen p-1 pb-10">
//         <div className="mt-10 border border-black rounded-md max-w-6xl mx-auto">
//           {/* about section */}
//           <div className="p-10">
//             <div className="text-center">
//               <h3 className="text-7xl font-bold font-heading">ABOUT ME</h3>
//             </div>

//             <div className="text-start mt-10">
//               <h3 className="leading-normal	 font-normal text-3xl font-aboutText">
//                 Hi, I’m Bhautik Sangani—a Fullstack Developer building dynamic
//                 web experiences with the MERN stack. I bridge creativity and
//                 code to craft scalable solutions, blending modern tools
//                 (React.js, TypeScript). Let’s not just write software—let’s
//                 engineer innovation that users love. Ready to redefine what’s
//                 possible?
//               </h3>
//             </div>
//           </div>

//           {/* skill section */}
//           <div className=" mt-20">
//             <div className="text-center">
//               <h3 className="text-7xl font-bold font-heading">SKILL SET</h3>
//             </div>
//             <div className="text-center mt-10">
//               <div className="w-full  p-5 rounded-md border border-black">
//                 <h3 className="text-3xl uppercase font-normal font-aboutText">
//                   {" "}
//                   Frontend <br />{" "}
//                   <span className="block mt-4 text-7xl font-black">
//                     HTML, CSS, JavaScript
//                   </span>
//                 </h3>
//               </div>
//               <div className="w-full p-5 rounded-md border border-black">
//                 <h3 className="text-3xl uppercase font-normal font-aboutText">
//                   Frameworks & Libraries <br />{" "}
//                   <span className="block mt-4 text-7xl font-black">
//                     React.js, TypeScript
//                   </span>
//                 </h3>
//               </div>
//               <div className="w-full p-5 rounded-md border border-black">
//                 <h3 className="text-3xl uppercase font-normal font-aboutText">
//                   Backend <br />
//                   <span className="block mt-4 text-7xl font-black">
//                     Node.js, Express.js, MongoDB
//                   </span>
//                 </h3>
//               </div>
//               <div className="w-full p-5 rounded-md border border-black">
//                 <h3 className="text-3xl uppercase font-normal font-aboutText">
//                   Architecture <br />
//                   <span className="block mt-4 text-7xl font-black">
//                     Microservices
//                   </span>
//                 </h3>
//               </div>
//             </div>
//           </div>

//           {/* work section */}
//           <div className=" mt-20">
//             <div className="text-center">
//               <h3 className="text-7xl font-bold font-heading">WORK</h3>
//             </div>
//             <div className="text-center mt-10 pb-10">
//               <Link to="/work">
//                 <Magnet padding={50} disabled={false} magnetStrength={3}>
//                   <button className="px-6 py-3 text-black font-bold text-lg rounded-md border-2 border-black shadow-lg">
//                     Click to See!
//                   </button>
//                 </Magnet>
//               </Link>
//             </div>
//           </div>

//           {/* contact section */}
//           <div className="mt-10 border border-black w-full h-screen relative overflow-hidden">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full h-screen pointer-events-none"
//             >
//               <FallingText
//                 text={`&#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2`}
//                 highlightWords={[
//                   "React",
//                   "Bits",
//                   "animated",
//                   "components",
//                   "simplify",
//                 ]}
//                 highlightClass="highlighted"
//                 trigger="scroll"
//                 backgroundColor="transparent"
//                 wireframes={false}
//                 gravity={0.56}
//                 fontSize="2rem"
//                 mouseConstraintStiffness={0.9}
//               />
//             </motion.div>

//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full text-center cursor-pointer">
//               <div className="w-1/2 text-8xl font-bold font-aboutText uppercase mx-auto">
//                 <a
//                   href="mailto:sanganibhumit421@gmail.com"
//                   className="group flex flex-col items-center"
//                 >
//                   <span className="relative inline-block after:block after:h-1 after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out group-hover:after:w-full">
//                     <DecryptedText
//                       text="Let's work"
//                       animateOn="view"
//                       revealDirection="center"
//                       speed={50}
//                     />
//                   </span>
//                   <span className="relative inline-block after:block after:h-1 after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out group-hover:after:w-full">
//                     <DecryptedText
//                       text="together!"
//                       animateOn="view"
//                       revealDirection="center"
//                       speed={50}
//                     />
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect } from "react";
// import Waves from "./home wawes/HomeLine";
// import { SiPolestar } from "react-icons/si";
// import { MdOutlineEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
// import Magnet from "./button animation/Buton";
// import FallingText from "./gravity text/FallingText";
// import { motion } from "framer-motion";
// import DecryptedText from "./decrypt text/Decrypted";

// const Home = () => {
//   return (
//     <div className="p-1 sm:p-3 bg-[#160000]">
//       {/* First Section */}
//       <div className="border border-[#160000] bg-[#F40C3F] w-full min-h-screen">
//         <nav className="text-black flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4 py-2 sm:py-5 relative border-b border-[#160000]">
//           {/* Left Icon with Line */}
//           <Link to="/" className="order-1 sm:order-none">
//             <div className="flex items-center">
//               <img
//                 src="src/images/logo2.png"
//                 alt="Logo"
//                 className="w-8 h-6 sm:w-20 sm:h-20"
//               />
//               <div className="hidden sm:block w-px h-20 bg-[#160000] mx-2"></div>
//             </div>
//           </Link>

//           {/* Center Text - Hidden on mobile */}
//           <div className="hidden sm:flex gap-4 lg:gap-10 justify-center items-center cursor-pointer order-3 sm:order-none">
//             <div className="w-px h-20 bg-[#160000] mx-2"></div>
//             <Link to="/about">
//               <h1 className="text-2xl lg:text-4xl font-bold tracking-tight font-heading text-[#160000]">
//                 ABOUT
//               </h1>
//             </Link>
//             <Link to="/work">
//               <h1 className="text-2xl lg:text-4xl font-bold tracking-wide font-heading text-[#160000]">
//                 WORK
//               </h1>
//             </Link>
//             <Link to="/contact">
//               <h1 className="text-2xl lg:text-4xl font-bold tracking-wide font-heading text-[#160000]">
//                 CONTACT
//               </h1>
//             </Link>
//             <div className="w-px h-20 bg-[#160000] mx-2"></div>
//           </div>

//           {/* Mobile Menu Icon */}
//           <div className="sm:hidden order-2">
//             {/* Add your mobile menu icon here */}
//             <svg
//               className="w-8 h-8"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </div>

//           {/* Right QR Code with Line */}
//           <div className="hidden sm:flex items-center text-[#160000] text-3xl lg:text-7xl order-4">
//             <div className="w-px h-20 bg-[#160000] mx-2"></div>
//             <a href="mailto:sanganibhumit421@gmail.com">
//               <MdOutlineEmail className="cursor-pointer" />
//             </a>
//           </div>
//         </nav>

//         {/* Waves Section */}
//         <div className="mt-2 sm:mt-4 relative h-[200px] sm:h-[300px] md:h-[450px]">
//           <Waves />
//         </div>

//         <div className="border mt-2 sm:mt-5 border-[#160000]"></div>

//         {/* Title Section */}
//         <div className="text-[#160000] flex flex-col items-center text-4xl sm:text-5xl md:text-[8vw] font-bold p-2 tracking-tight gap-1 sm:gap-3 font-homepage">
//           <h3>FULLSTACK</h3>
//           <SiPolestar className="hidden sm:block" />
//           <h3>DEVELOPER</h3>
//         </div>
//       </div>

//       {/* All Sections */}
//       <div className="bg-[#F40C3F] w-full min-h-screen p-1 pb-10">
//         <div className="mt-5 sm:mt-10 border border-black rounded-md max-w-6xl mx-auto">
//           {/* About Section */}
//           <div className="p-4 sm:p-10">
//             <div className="text-center">
//               <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading">
//                 ABOUT ME
//               </h3>
//             </div>

//             <div className="text-start mt-5 sm:mt-10">
//               <h3 className="leading-normal font-normal text-lg sm:text-2xl md:text-3xl font-aboutText">
//                 Hi, I’m Bhautik Sangani—a Fullstack Developer building dynamic
//                 web experiences with the MERN stack. I bridge creativity and
//                 code to craft scalable solutions, blending modern tools
//                 (React.js, TypeScript). Let’s not just write software—let’s
//                 engineer innovation that users love. Ready to redefine what’s
//                 possible?
//               </h3>
//             </div>
//           </div>

//           {/* Skill Section */}
//           <div className="mt-10 sm:mt-20">
//             <div className="text-center">
//               <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading">
//                 SKILL SET
//               </h3>
//             </div>
//             <div className="text-center mt-5 sm:mt-10 grid gap-2 sm:gap-4">
//               <div className="w-full p-3 sm:p-5 rounded-md border border-black">
//                 <h3 className="text-xl sm:text-3xl uppercase font-normal font-aboutText">
//                   Frontend <br />
//                   <span className="block mt-2 sm:mt-4 text-3xl sm:text-5xl md:text-7xl font-black">
//                     HTML, CSS, JavaScript
//                   </span>
//                 </h3>
//               </div>
//               <div className="w-full p-3 sm:p-5 rounded-md border border-black">
//                 <h3 className="text-xl sm:text-3xl uppercase font-normal font-aboutText">
//                   Frameworks & Libraries <br />
//                   <span className="block mt-2 sm:mt-4 text-3xl sm:text-5xl md:text-7xl font-black">
//                     React.js, TypeScript
//                   </span>
//                 </h3>
//               </div>
//               <div className="w-full p-3 sm:p-5 rounded-md border border-black">
//                 <h3 className="text-xl sm:text-3xl uppercase font-normal font-aboutText">
//                   Backend <br />
//                   <span className="block mt-2 sm:mt-4 text-3xl sm:text-5xl md:text-7xl font-black">
//                     Node.js, Express.js, MongoDB
//                   </span>
//                 </h3>
//               </div>
//               <div className="w-full p-3 sm:p-5 rounded-md border border-black">
//                 <h3 className="text-xl sm:text-3xl uppercase font-normal font-aboutText">
//                   Architecture <br />
//                   <span className="block mt-2 sm:mt-4 text-3xl sm:text-5xl md:text-7xl font-black">
//                     Microservices
//                   </span>
//                 </h3>
//               </div>
//             </div>
//           </div>

//           {/* Work Section */}
//           <div className="mt-10 sm:mt-20">
//             <div className="text-center">
//               <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading">
//                 WORK
//               </h3>
//             </div>
//             <div className="text-center mt-5 sm:mt-10 pb-5 sm:pb-10">
//               <Link to="/work">
//                 <Magnet padding={30} disabled={false} magnetStrength={2}>
//                   <button className="px-4 sm:px-6 py-2 sm:py-3 text-black font-bold text-base sm:text-lg rounded-md border-2 border-black shadow-lg">
//                     Click to See!
//                   </button>
//                 </Magnet>
//               </Link>
//             </div>
//           </div>

//           {/* Contact Section */}
//           <div className="mt-10 border border-black w-full h-[50vh] sm:h-screen relative overflow-hidden">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full h-screen pointer-events-none"
//             >
//               <FallingText
//                 text={`&#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2`}
//                 highlightWords={[
//                   "React",
//                   "Bits",
//                   "animated",
//                   "components",
//                   "simplify",
//                 ]}
//                 highlightClass="highlighted"
//                 trigger="scroll"
//                 backgroundColor="transparent"
//                 wireframes={false}
//                 gravity={0.56}
//                 fontSize="clamp(1rem, 2vw, 2rem)"
//                 mouseConstraintStiffness={0.9}
//               />
//             </motion.div>

//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full text-center cursor-pointer">
//               <div className="w-11/12 sm:w-3/4 md:w-1/2 text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold font-aboutText uppercase mx-auto">
//                 <a
//                   href="mailto:sanganibhumit421@gmail.com"
//                   className="group flex flex-col items-center"
//                 >
//                   <span className="relative inline-block after:block after:h-1 after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out group-hover:after:w-full">
//                     <DecryptedText
//                       text="Let's work"
//                       animateOn="view"
//                       revealDirection="center"
//                       speed={50}
//                     />
//                   </span>
//                   <span className="relative inline-block after:block after:h-1 after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out group-hover:after:w-full">
//                     <DecryptedText
//                       text="together!"
//                       animateOn="view"
//                       revealDirection="center"
//                       speed={50}
//                     />
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect } from "react";
// import Waves from "./home wawes/HomeLine";
// import { SiPolestar, SiLinkedin } from "react-icons/si";
// import { MdOutlineEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
// import Magnet from "./button animation/Buton";
// import FallingText from "./gravity text/FallingText";
// import { motion } from "framer-motion";
// import DecryptedText from "./decrypt text/Decrypted";

// const Home = () => {
//   return (
//     <div className="p-1 sm:p-3 bg-[#160000]">
//       {/* First Section */}
//       <div className="border border-[#160000] bg-[#F40C3F] w-full min-h-screen">
//         <nav className="text-black flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4 py-2 sm:py-5 relative border-b border-[#160000]">
//           {/* Left Icon with Line */}
//           <Link to="/" className="order-1 sm:order-none">
//             <div className="flex items-center">
//               <img
//                 src="src/images/logo2.png"
//                 alt="Logo"
//                 className="w-8 h-6 sm:w-20 sm:h-20"
//               />
//               <div className="hidden sm:block w-px h-20 bg-[#160000] mx-2"></div>
//             </div>
//           </Link>

//           {/* Center Text - Hidden on mobile */}
//           <div className="hidden sm:flex gap-4 lg:gap-10 justify-center items-center cursor-pointer order-3 sm:order-none">
//             <div className="w-px h-20 bg-[#160000] mx-2"></div>
//             <Link to="/about">
//               <h1 className="text-2xl lg:text-4xl font-bold tracking-tight font-heading text-[#160000]">
//                 ABOUT
//               </h1>
//             </Link>
//             <Link to="/work">
//               <h1 className="text-2xl lg:text-4xl font-bold tracking-wide font-heading text-[#160000]">
//                 WORK
//               </h1>
//             </Link>
//             <Link to="/contact">
//               <h1 className="text-2xl lg:text-4xl font-bold tracking-wide font-heading text-[#160000]">
//                 CONTACT
//               </h1>
//             </Link>
//             <div className="w-px h-20 bg-[#160000] mx-2"></div>
//           </div>

//           {/* Mobile Menu Icon */}
//           <div className="sm:hidden order-2">
//             {/* Add your mobile menu icon here */}
//             <svg
//               className="w-8 h-8"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </div>

//           {/* Right QR Code with Line */}
//           <div className="hidden sm:flex items-center text-[#160000] text-3xl lg:text-7xl order-4">
//             <div className="w-px h-20 bg-[#160000] mx-2"></div>
//             <a
//               href="https://www.linkedin.com/in/bhautik-sangani-38781b257"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-6xl"
//             >
//               <SiLinkedin className="cursor-pointer mx-2" />
//             </a>
//             <div className="w-px h-20 bg-[#160000] mx-2"></div>
//             <a href="mailto:sanganibhumit421@gmail.com">
//               <MdOutlineEmail className="cursor-pointer mx-2" />
//             </a>
//           </div>
//         </nav>

//         {/* Waves Section */}
//         <div className="mt-2 sm:mt-4 relative h-[200px] sm:h-[300px] md:h-[450px]">
//           <Waves />
//         </div>

//         <div className="border mt-2 sm:mt-5 border-[#160000]"></div>

//         {/* Title Section */}
//         <div className="text-[#160000] flex flex-col items-center text-4xl sm:text-5xl md:text-[8vw] font-bold p-2 tracking-tight gap-1 sm:gap-3 font-homepage">
//           <h3>FULLSTACK</h3>
//           <SiPolestar className="hidden sm:block" />
//           <h3>DEVELOPER</h3>
//         </div>
//       </div>

//       {/* All Sections */}
//       <div className="bg-[#F40C3F] w-full min-h-screen p-1 pb-10">
//         <div className="mt-5 sm:mt-10 border border-black rounded-md max-w-6xl mx-auto">
//           {/* About Section */}
//           <div className="p-4 sm:p-10">
//             <div className="text-center">
//               <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading">
//                 ABOUT ME
//               </h3>
//             </div>

//             <div className="text-start mt-5 sm:mt-10">
//               <h3 className="leading-normal font-normal text-lg sm:text-2xl md:text-3xl font-aboutText">
//                 Hi, I’m Bhautik Sangani—a Fullstack Developer building dynamic
//                 web experiences with the MERN stack. I bridge creativity and
//                 code to craft scalable solutions, blending modern tools
//                 (React.js, TypeScript). Let’s not just write software—let’s
//                 engineer innovation that users love. Ready to redefine what’s
//                 possible?
//               </h3>
//             </div>
//           </div>

//           {/* Skill Section */}
//           <div className="mt-10 sm:mt-20">
//             <div className="text-center">
//               <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading">
//                 SKILL SET
//               </h3>
//             </div>
//             <div className="text-center mt-5 sm:mt-10 grid gap-2 sm:gap-4">
//               <div className="w-full p-3 sm:p-5 rounded-md border border-black">
//                 <h3 className="text-xl sm:text-3xl uppercase font-normal font-aboutText">
//                   Frontend <br />
//                   <span className="block mt-2 sm:mt-4 text-3xl sm:text-5xl md:text-7xl font-black">
//                     HTML, CSS, JavaScript
//                   </span>
//                 </h3>
//               </div>
//               <div className="w-full p-3 sm:p-5 rounded-md border border-black">
//                 <h3 className="text-xl sm:text-3xl uppercase font-normal font-aboutText">
//                   Frameworks & Libraries <br />
//                   <span className="block mt-2 sm:mt-4 text-3xl sm:text-5xl md:text-7xl font-black">
//                     React.js, TypeScript
//                   </span>
//                 </h3>
//               </div>
//               <div className="w-full p-3 sm:p-5 rounded-md border border-black">
//                 <h3 className="text-xl sm:text-3xl uppercase font-normal font-aboutText">
//                   Backend <br />
//                   <span className="block mt-2 sm:mt-4 text-3xl sm:text-5xl md:text-7xl font-black">
//                     Node.js, Express.js, MongoDB
//                   </span>
//                 </h3>
//               </div>
//               <div className="w-full p-3 sm:p-5 rounded-md border border-black">
//                 <h3 className="text-xl sm:text-3xl uppercase font-normal font-aboutText">
//                   Architecture <br />
//                   <span className="block mt-2 sm:mt-4 text-3xl sm:text-5xl md:text-7xl font-black">
//                     Microservices
//                   </span>
//                 </h3>
//               </div>
//             </div>
//           </div>

//           {/* Work Section */}
//           <div className="mt-10 sm:mt-20">
//             <div className="text-center">
//               <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading">
//                 WORK
//               </h3>
//             </div>
//             <div className="text-center mt-5 sm:mt-10 pb-5 sm:pb-10">
//               <Link to="/work">
//                 <Magnet padding={30} disabled={false} magnetStrength={2}>
//                   <button className="px-4 sm:px-6 py-2 sm:py-3 text-black font-bold text-base sm:text-lg rounded-md border-2 border-black shadow-lg">
//                     Click to See!
//                   </button>
//                 </Magnet>
//               </Link>
//             </div>
//           </div>

//           {/* Contact Section */}
//           <div className="mt-10 border border-black w-full h-[50vh] sm:h-screen relative overflow-hidden">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full h-screen pointer-events-none"
//             >
//               <FallingText
//                 text={`&#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2B24 &#x25C6 &#x25B2 &#x2B23 &#x25A0 &#x2726 &#x2B1F &#x25BC &#x25C6 &#x2B1F &#x2B24 &#x25BC &#x25B2 &#x25A0 &#x2726 &#x2B23 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2 &#x2B1F &#x25C6 &#x2726 &#x25BC &#x25A0 &#x2B24 &#x2726 &#x2B24 &#x2B1F &#x25C6 &#x2B23 &#x25BC &#x25B2 &#x25A0 &#x2B23 &#x25B2`}
//                 highlightWords={[
//                   "React",
//                   "Bits",
//                   "animated",
//                   "components",
//                   "simplify",
//                 ]}
//                 highlightClass="highlighted"
//                 trigger="scroll"
//                 backgroundColor="transparent"
//                 wireframes={false}
//                 gravity={0.56}
//                 fontSize="clamp(1rem, 2vw, 2rem)"
//                 mouseConstraintStiffness={0.9}
//               />
//             </motion.div>

//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full text-center cursor-pointer">
//               <div className="w-11/12 sm:w-3/4 md:w-1/2 text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold font-aboutText uppercase mx-auto">
//                 <a
//                   href="mailto:sanganibhumit421@gmail.com"
//                   className="group flex flex-col items-center"
//                 >
//                   <span className="relative inline-block after:block after:h-1 after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out group-hover:after:w-full">
//                     <DecryptedText
//                       text="Let's work"
//                       animateOn="view"
//                       revealDirection="center"
//                       speed={50}
//                     />
//                   </span>
//                   <span className="relative inline-block after:block after:h-1 after:w-0 after:bg-black after:transition-all after:duration-500 after:ease-in-out group-hover:after:w-full">
//                     <DecryptedText
//                       text="together!"
//                       animateOn="view"
//                       revealDirection="center"
//                       speed={50}
//                     />
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

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
            <img src="src/images/logo2.png" alt="Logo" className="w-20 h-20" />
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
            <a href="mailto:email">
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
              <SiLinkedin className="text-4xl mx-3" />
              <div className="w-px h-12 bg-black"></div>
            </div>
            <div className="flex items-center">
              <div className="w-px h-12 bg-black"></div>
              <MdOutlineEmail className="text-5xl mx-3" />
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
          <div className="mt-10 border border-black w-full h-[50vh] sm:h-screen relative overflow-hidden">
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

