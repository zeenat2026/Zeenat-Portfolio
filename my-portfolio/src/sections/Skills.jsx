

import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub,} from "react-icons/fa";
import {SiTailwindcss,SiDaisyui,SiMui, SiRedux, SiAxios,SiExpress,SiMongodb,} from "react-icons/si";
import { TbApi } from "react-icons/tb";

// Zustand's logo is a bear, so we use an emoji for it
const Bear = () => <span style={{ fontSize: "1.4rem" }}>🐻</span>;

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "DaisyUI", icon: SiDaisyui, color: "#8B5CF6" },
      { name: "MUI", icon: SiMui, color: "#007FFF" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Zustand", icon: Bear, color: null },
      { name: "Axios", icon: SiAxios, color: "#7C5CFF" },
      { name: "REST APIs", icon: TbApi, color: "#10B981" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: null },
    ],
  },
  {
    title: "Database",
    items: [{ name: "MongoDB", icon: SiMongodb, color: "#47A248" }],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: null },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills__heading">Skills</h2>
      <p className="skills__intro">
        The tools I use to build full-stack web apps, from the interface to the
        database.
      </p>

      {skillGroups.map((group) => (
        <div className="skills__group" key={group.title}>
          <h3 className="skills__title">{group.title}</h3>
          <ul className="skills__list">
            {group.items.map(({ name, icon: Icon, color }) => (
              <li className="skills__item" key={name}>
                <Icon
                  className="skills__icon"
                  style={color ? { color } : undefined}
                  aria-hidden="true"
                />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}