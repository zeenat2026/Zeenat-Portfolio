import { useEffect, useState } from "react";
import SocialIcons from "../components/SocialIcons";

const roles = ["Frontend Developer", "Backend Developer", "Mern Stack Developer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let delay = 100;

    if (!isDeleting && charCount === roles[roleIndex].length) {
      delay = 1500;
    } else if (isDeleting) {
      delay = 50;
    }
    const timeoutId = setTimeout(() => {
      if (!isDeleting) {
        if (charCount < roles[roleIndex].length) {
          setCharCount((prevCount) => prevCount + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charCount > 0) {
          setCharCount((prevCount) => prevCount - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [charCount, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      
      {/* Unified Container Wrapper with exact grid/flex handling */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-6 w-full py-10">
        
        {/* Left Section - Text and Info */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
          <p className="text-lg md:text-xl font-medium tracking-wide opacity-90">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mt-1">
            Zeenat Shafqaat
          </h1>
          
          {/* Locked height wrapper prevents text shifting layouts during typing cycles */}
          <h2 className="text-2xl sm:text-3xl font-bold mt-3 min-h-[40px] flex items-center justify-center md:justify-start">
            <span>I'm a&nbsp;</span>
            <span className="text-secondary relative">
              {roles[roleIndex].slice(0, charCount)}
              {/* Inline Typing Cursor Blinker */}
              <span className="inline-block w-[3px] h-[1.1em] bg-secondary ml-1 animate-pulse vertical-middle"></span>
            </span>
          </h2>
          
          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-base md:text-lg opacity-80 leading-relaxed">
            I'm a self-taught developer who loves turning ideas into complete web
            applications. I build responsive interfaces with React and power them
            with Node.js, Express and MongoDB.
          </p>

          {/* Action Buttons Container */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a href="#projects" className="btn btn-secondary shadow-md hover:scale-105 transition-transform duration-200">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline btn-secondary shadow-sm hover:scale-105 transition-transform duration-200">
              Contact Me
            </a>
          </div>
          
          {/* Social Icons Container */}
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <SocialIcons />
          </div>
        </div>

        {/* Right Section - Profile Emblem Circle */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-secondary/80 bg-base-200/50 shadow-inner overflow-hidden grid place-content-center transition-all duration-300 hover:border-secondary">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-secondary tracking-wider selection:bg-transparent">
              ZS
            </span>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
