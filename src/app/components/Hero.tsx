import React from "react";
import Button from "./Button";
import Box from "./Drag";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#171717_40%,#63e_100%)]"></div>
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <h3 className="text-[#ff9900d5] text-2xl font-playwrite">HI, I&apos;M</h3>
          <h1 className="font-playfair">
            <Box />
          </h1>
          <h2 className="text-[#ff9900d5] font-playfair text-4xl">
            <span className="text-[#ffffff]">I Am </span>
            <Typewriter
              words={[
                "A Web Developer",
                "An AI Enthusiast",
                "A Tech Explorer",
                "A Problem Solver",
                "A Learner",
                "A Creator",
                "A Designer",
                "A Coder",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            A passionate B.Tech Computer Engineering student with a strong
            interest in web development and AI. I enjoy building clean,
            user-friendly websites and exploring innovative tech solutions.
            Always curious, always learning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button>Get Started</Button>
            <Button>Contact Me</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
