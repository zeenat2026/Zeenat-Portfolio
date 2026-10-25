const links = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Skills", href: "#skill" },
  { id: 4, label: "Projects", href: "#project" },
  { id: 5, label: "Contact", href: "#contact" },
];

const socials = [
  { id: 1, label: "GitHub", href: "https://github.com/zeenat2026" },
  { id: 2, label: "LinkedIn", href: "https://www.linkedin.com/in/zeenat-shafqaat/" },
  { id: 3, label: "Email", href: "mailto:zeenatshafqaat.dev@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="border-t border-base-content/10 mt-10 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold">
            <span className="text-secondary font-extrabold">P</span>ortfolio
          </h3>
          <p className="opacity-70 mt-1">Self-taught MERN stack developer</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="link link-hover">{link.label}</a>
            </li>
          ))}
        </ul>

        <ul className="flex gap-4">
          {socials.map((social) => (
            <li key={social.id}>
              <a href={social.href} target="_blank" rel="noreferrer" className="link link-hover">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-center text-sm opacity-60 mt-6">
        © {new Date().getFullYear()} Zeenat Shafqaat. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;