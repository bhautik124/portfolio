import React from "react";
import InfiniteMenu from "./work animation/WorkAnimation";

const Worksection = () => {
  const items = [
    {
      image: "/images/airline.jpg",
      link: "https://github.com/bhautik124/React---airlineBooking.git",
      title: "Airline Booking",
      description:
        "Built a responsive ReactJS app with flight info and booking via APIs.",
    },
    {
      image: "/images/study.jpg",
      link: "https://github.com/bhautik124/React---onlineCoursePlatform.git",
      title: "Study Platform",
      description:
        "Built an online learning platform with ReactJS, Material-UI, and a full course catalog.",
    },
    {
      image: "/images/ecommerce.png",
      link: "https://github.com/bhautik124/chair-fullstack.git",
      title: "E-commerce Site",
      description:
        "Full-stack project with React, Node, Express, MongoDB, and GSAP for modern animated UI.",
    },
    {
      image: "/images/api.jpg",
      link: "https://github.com/bhautik124/MERN-API.git",
      title: "GenAPI Hub & AIChat",
      description:
        "MERN platform for instant APIs, no-code auth, and AI-driven responses, simplifying backend dev.",
    },
  ];
  return (
    <div className="h-full relative text-black bg-[linear-gradient(135deg,_#ffffff,_#e6f0ff)]">
      <InfiniteMenu items={items} />
    </div>
  );
};

export default Worksection;
