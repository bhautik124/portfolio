import React from "react";
import InfiniteMenu from "./work animation/WorkAnimation";

const Worksection = () => {
  const items = [
    {
      image: "src/images/1.png",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/400/400?grayscale",
      link: "https://google.com/",
      title: "Item 2",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      link: "https://google.com/",
      title: "Item 3",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?",
    },
  ];
  return (
    <div className="h-full relative text-black bg-[linear-gradient(135deg,_#ffffff,_#e6f0ff)]">
      <InfiniteMenu  items={items} />
    </div>
  );
};

export default Worksection;
