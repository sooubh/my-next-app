import React from "react";
import { motion } from "framer-motion";
import portfolioData from "../data/Constant.js";

const word = portfolioData.name;

const dragSettings = {
  drag: true,
  dragTransition: {
    power: 0.1,
    timeConstant: 300,
    modifyTarget: (target: number) => target * 0.5,
  },
  whileTap: { scale: 1.2 },
};

const DragText: React.FC = () => {
  return (
    <div className="flex justify-center">
      {word.split("").map((char: string, index: number) => (
        <motion.span
          key={index}
          {...dragSettings}
          className="mb-8 tracking-tight sm:text-7xl lg:text-9xl text-white inline-block mx-1 text-6xl font-bold cursor-grab"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default DragText;
