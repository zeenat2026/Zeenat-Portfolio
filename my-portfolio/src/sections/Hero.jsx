import { useEffect, useState } from "react";
import SocialIcons from "../components/SocialIcons";


const roles = ["Frontend Developer", "Backend Developer", "Mern Stack Developer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)


  useEffect(() => {
    let delay = 100

    if (!isDeleting && charCount === roles[roleIndex].length) {
      delay = 1500
    } else if (isDeleting) {
      delay = 50
    }
    const timeoutId = setTimeout(() => {
      if (!isDeleting) {
        if (charCount < roles[roleIndex].length) {
          setCharCount((prevCount) => prevCount + 1)
        } else {

          setIsDeleting(true)
        }
      }
      else {

        if (charCount > 0) {
          setCharCount((prevCount) => prevCount - 1)
        } else {
          setIsDeleting(false)
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)

        }
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [charCount, isDeleting, roleIndex])


  return (
    <section id="home" className="min-h-screen flex items-center">

      <div className="flex flex-col-reverse md:flex-row items-center gap-10 py-10">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left md:px-5">
         
          <p className="text-xl">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Zeenat Shafqaat
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            I'm a <span className="text-secondary">{roles[roleIndex].slice(0, charCount)}</span>
          </h2>
          <p className="mt-4 max-w-xl opacity-80">
            I'm a self-taught developer who loves turning ideas into complete web
            applications. I build responsive interfaces with React and power them
            with Node.js, Express and MongoDB.
          </p>

          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a href="#projects" className="btn btn-secondary">View Projects</a>
            <a href="#contact" className="btn btn-outline btn-secondary">Contact Me</a>
          </div>
          <div className="flex gap-4 mt-8 justify-center md:justify-start" >
            <SocialIcons />
          </div>
          
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-secondary overflow-hidden grid place-content-center">
            <span className="text-6xl md:text-7xl font-extrabold text-secondary">ZS</span>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Hero