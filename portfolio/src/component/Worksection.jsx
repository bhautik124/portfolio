import React from "react";
import InfiniteMenu from "./work animation/WorkAnimation";

const Worksection = () => {
  const items = [
    {
      image: "public/images/airline.jpg",
      link: "https://google.com/",
      title: "Airline Booking",
      description:
        "Built a responsive ReactJS app with flight info and booking via APIs.",
    },
    {
      image: "public/images/study.jpg",
      link: "https://google.com/",
      title: "Study Platform",
      description:
        "Built an online learning platform with ReactJS, Material-UI, and a full course catalog.",
    },
    {
      image: "public/images/ecommerce.png",
      link: "https://google.com/",
      title: "E-commerce Site",
      description:
        "Full-stack project with React, Node, Express, MongoDB, and GSAP for modern animated UI.",
    },
    {
      image: "public/images/api.jpg",
      link: "https://google.com/",
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
