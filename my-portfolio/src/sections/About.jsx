
import { FaDownload } from "react-icons/fa";
const About = () => {

  
  return (
    <section id="about" className="scroll-mt-20 min-h-[calc(100vh-5rem)] flex items-center py-16">
       
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 w-full">
     {/* left Section */}
      <div className="flex flex-1 md:px-2 flex-col">
         <div className="mt-8 max-w-3xl mx-auto space-y-4 md:text-left opacity-90">
            <h2 className="text-3xl md:text-4xl font-extrabold ">
        About <span className="text-secondary">Me</span>
      </h2>
         <h2 className="text-2xl font-bold">I'm a <span className="text-secondary">Mern Stack Developer</span> </h2>
        <p >Hi, I’m Zeenat Shafqaat, a self-taught MERN stack developer from Yazman, Bahawalpur, Pakistan. My background is in Zoology, but I taught myself web development by building real projects, including a full-stack e-commerce app, an expense tracker, and a news app. I enjoy turning ideas into working products, from React interfaces to Node.js and MongoDB backends. I’m looking for a junior full-stack role, preferably remote, where I can contribute and keep growing.</p>
          
      </div>

     <div className="mt-8 flex justify-center md:justify-start gap-3">
 <a href="/Zeenat-Shafqaat-CV.pdf" download className="btn btn-secondary">
            <FaDownload />Download CV
            </a>
        
      </div>

      </div>
      {/* {right section} */}
      <div className="flex flex-1 justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-secondary overflow-hidden grid place-content-center">
     <span className="text-6xl md:text-7xl font-extrabold text-secondary">ZS</span>
        </div>

      </div>
      </div>
     

     
    </section>
  );
};

export default About;