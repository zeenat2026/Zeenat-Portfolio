import {FaGithub,FaExternalLinkAlt,FaShoppingCart, FaNewspaper, FaWallet, FaUtensils,} from "react-icons/fa";

// While image is null, the card shows the icon instead.
const projects = [
  {
    id: 1,
    title: "Market-Hub",
    description:
      "Full-stack e-commerce app where users browse products, manage a cart and place orders. Includes JWT auth, admin-only product management and stock that updates on every order.",
    image:'/new-market-hub.jpg',
    icon: FaShoppingCart,
    tech: ["React", "Redux Toolkit", "MUI", "Node.js", "Express", "MongoDB"],
    liveUrl:'https://market-hub-frontend-zeta.vercel.app',
    githubUrl:'https://github.com/zeenat2026/Market-Hub',
  },
  {
    id: 2,
    title: "News-Hub",
    description:
      "Responsive news app that pulls live articles from a News API and shows them in a clean card layout, with a dark/light theme toggle.",
    image: '/news-app.jpg',
    icon: FaNewspaper,
    tech: ["React", "MUI", "News API"],
    liveUrl: 'https://news-hub-frontend-gray.vercel.app/' ,
    githubUrl: 'https://github.com/zeenat2026/News-Hub',
  },
  {
    id: 3,
    title: "Expense-Tracker",
    description:
      "Personal finance app to add, edit and delete income and expenses and see the total balance. Secure login with automatic logout when the token expires.",
    image:'/new-expense-tracker.jpg',
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
    <section id="projects" className="scroll-mt-20 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold">
        My <span className="text-secondary">Projects</span>
      </h2>
      <p className="mt-2 max-w-xl opacity-80">
        Real apps I built from scratch, from the interface to the database.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map(
          ({ id, title, description, image, icon: Icon, tech, liveUrl, githubUrl }) => (
            <article
              key={id}
              className="card bg-base-200 shadow-md overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"
            >
              <figure className="aspect-16/8 bg-secondary/10 flex items-center justify-center">
                {image ? (
                  <img
                    src={image}
                    alt={`${title} screenshot`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <Icon className="text-6xl text-secondary" aria-hidden="true" />
                )}
              </figure>

              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="opacity-80">{description}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {tech.map((t) => (
                    <span key={t} className="badge badge-outline badge-secondary">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="card-actions mt-auto pt-4">
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-secondary btn-sm"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {!liveUrl && !githubUrl && (
                    <span className="text-sm opacity-60">Links coming soon</span>
                  )}
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;