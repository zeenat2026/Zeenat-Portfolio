import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

const socials = [
  { id: 1, href: "https://github.com/zeenat2026", icon: <FaGithub />, ariaLabel: "GitHub" },
  { id: 2, href: "https://www.linkedin.com/in/zeenat-shafqaat/", icon: <FaLinkedin />, ariaLabel: "LinkedIn" },
  { id: 3, href: "https://www.instagram.com/zee.nat2347/", icon: <FaInstagram />, ariaLabel: "Instagram" },
  { id: 4, href: "https://facebook-lite.vercel.app/profile", icon: <FaFacebookF />, ariaLabel: "Facebook" },
];

const SocialIcons = () => {
  return (
    // Replaced the fragment with a flex container to keep icons aligned and wrap-safe
    <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.href}
          aria-label={social.ariaLabel} // Fixed property spelling typo here
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 grid place-content-center rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-content hover:scale-110 active:scale-95 transition-all duration-200"
        >
          {/* Enhanced size configuration directly on the icon elements */}
          <span className="text-xl">{social.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
