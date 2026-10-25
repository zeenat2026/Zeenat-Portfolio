import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF  } from "react-icons/fa";

  const socials = [
    { id: 1, href: "https://github.com/zeenat2026", icon: <FaGithub />, arialLabel:"GitHub" },
    { id: 2, href: "https://www.linkedin.com/in/zeenat-shafqaat/", icon: <FaLinkedin />, arialLabel:"LinkedIn" },
    { id: 3, href: "https://www.instagram.com/zee.nat2347/", icon: <FaInstagram />, arialLabel:'Instagram' },
    { id: 4, href: "https://facebook-lite.vercel.app/profile", icon: <FaFacebookF />, arialLabel:'Facebook' },
  ]

const SocialIcons = () => {
  return (
     <>
      {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.arialLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 grid place-content-center rounded-full 
                  border-2 border-secondary hover:bg-secondary hover:text-secondary-content transition"
                >
                  {social.icon}
                </a>
              ))}
     </>
  )
}

export default SocialIcons
