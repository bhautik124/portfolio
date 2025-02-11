import { motion } from "framer-motion";
import React from "react";

const calculateRandomBlockDelay = (rowIndex, totalRows) => {
  const blockDelay = Math.random() * 0.05;
  const rowDelay = (totalRows - rowIndex - 1) * 0.05;
  return blockDelay + rowDelay;
};

const Transition = ({ Page }) => {
  return (
    <>
      {/* Render the Page component */}
      {React.createElement(Page)}

      {/* Transition blocks */}
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col pointer-events-none">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="flex flex-1 w-full" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className="flex-1 bg-[#F40C3F] -m-[0.25px]"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDelay(rowIndex, 10),
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col pointer-events-none">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="flex flex-1 w-full" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className="flex-1 bg-[#F40C3F] -m-[0.25px]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDelay(rowIndex, 10),
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Transition;