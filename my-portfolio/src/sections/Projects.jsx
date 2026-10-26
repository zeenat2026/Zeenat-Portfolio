import { FaGithub, FaExternalLinkAlt, FaShoppingCart, FaNewspaper, FaWallet, FaUtensils } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Market-Hub",
    description:
      "Full-stack e-commerce app where users browse products, manage a cart and place orders. Includes JWT auth, admin-only product management and stock that updates on every order.",
    image: '/new-market-hub.jpg',
    icon: FaShoppingCart,
    tech: ["React", "Redux Toolkit", "MUI", "Node.js", "Express", "MongoDB"],
    liveUrl: 'https://market-hub-frontend-zeta.vercel.app',
    githubUrl: 'https://github.com/zeenat2026/Market-Hub',
  },
  {
    id: 2,
    title: "News-Hub",
    description:
      "Responsive news app that pulls live articles from a News API and shows them in a clean card layout, with a dark/light theme toggle.",
    image: '/news-app.jpg',
    icon: FaNewspaper,
    tech: ["React", "MUI", "News API"],
    liveUrl: 'https://news-hub-frontend-gray.vercel.app/',
    githubUrl: 'https://github.com/zeenat2026/News-Hub',
  },
  {
    id: 3,
    title: "Expense-Tracker",
    description:
      "Personal finance app to add, edit and delete income and expenses and see the total balance. Secure login with automatic logout when the token expires.",
    image: '/new-expense-tracker.jpg',
    icon: FaWallet,
    tech: ["React", "Zustand", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    liveUrl: 'https://expense-tracker-frontend-one-jade.vercel.app/',
    githubUrl: 'https://github.com/zeenat2026/Expense-Tracker',
  },
  {
    id: 4,
    title: "Family Hotel Website",
    description:
      "Live website for a local family restaurant (Al Haram Food Point) so nearby customers can find it online.",
    image: '/family-hotel.jpg',
    icon: FaUtensils,
    tech: ["React", "MUI", "Redux Toolkit"],
    liveUrl: "https://family-hotel-git-main-zeenat7.vercel.app/",
    githubUrl: 'https://github.com/zeenat2026/Family-Hotel',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Centered clean heading context */}
      <div className="text-center md:text-left mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          My Featured <span className="text-secondary">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-secondary mt-3 mx-auto md:mx-0 rounded-full"></div>
        <p className="mt-4 max-w-xl text-base md:text-lg opacity-80 mx-auto md:mx-0">
          Real-world applications built from the user interface down to full database architectures.
        </p>
      </div>

      {/* Grid Layout using modern auto-height flex properties */}
      <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
        {projects.map(({ id, title, description, image, icon: Icon, tech, liveUrl, githubUrl }) => (
          <article
            key={id}
            className="group flex flex-col h-full bg-base-200/40 border border-base-content/5 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-base-200"
          >
            {/* Image Container with precise Zoom-on-Hover masking */}
            <figure className="relative aspect-[16/9] w-full overflow-hidden bg-base-300 border-b border-base-content/5 flex items-center justify-center">
              {image ? (
                <img
                  src={image}
                  alt={`${title} dashboard screen mockup`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />
              ) : (
                <Icon className="text-7xl text-secondary/60 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              )}
              {/* Sleek top ambient brand accent bar */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </figure>

            {/* Inner Content Card Body */}
            <div className="flex flex-col flex-grow p-6 sm:p-8">
              <h3 className="text-2xl font-bold tracking-tight group-hover:text-secondary transition-colors duration-200">
                {title}
              </h3>
              
              <p className="mt-3 text-sm md:text-base opacity-75 leading-relaxed flex-grow">
                {description}
              </p>

              {/* Technologies Badges Container */}
              <div className="flex flex-wrap gap-2 mt-6">
                {tech.map((t) => (
                  <span 
                    key={t} 
                    className="text-[12px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-secondary/10 text-secondary border border-secondary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons precisely pushed to the base of the card container */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-4 border-t border-base-content/5">
                {liveUrl && (
                  <a 
                    href={liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary btn-sm h-10 min-h-10 font-bold uppercase tracking-wide gap-2 shadow-sm rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                )}
                {githubUrl && (
                  <a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline btn-secondary btn-sm h-10 min-h-10 font-bold uppercase tracking-wide gap-2 rounded-lg hover:bg-secondary hover:text-secondary-content hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <FaGithub className="text-sm" /> Source Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
