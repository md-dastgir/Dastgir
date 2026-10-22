
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaAws,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { title: "HTML5", category: "Frontend", color: "text-orange-400", icon: FaHtml5 },
  { title: "CSS3", category: "Frontend", color: "text-blue-400", icon: FaCss3Alt },
  { title: "JavaScript", category: "Language", color: "text-yellow-400", icon: FaJsSquare },
  { title: "React", category: "Frontend", color: "text-cyan-400", icon: FaReact },
  { title: "Tailwind CSS", category: "Styling", color: "text-cyan-300", icon: SiTailwindcss },
  { title: "Git", category: "Version Control", color: "text-orange-400", icon: FaGitAlt },
  { title: "AWS", category: "Cloud", color: "text-yellow-400", icon: FaAws },
  { title: "Bootstrap", category: "Styling", color: "text-purple-400", icon: FaBootstrap },
  { title: "Node.js", category: "Backend", color: "text-green-400", icon: FaNodeJs },
  { title: "Express.js", category: "Backend", color: "text-gray-200", icon: SiExpress },
  { title: "PostgreSQL", category: "Database", color: "text-blue-300", icon: SiPostgresql },
  { title: "MongoDB", category: "Database", color: "text-green-400", icon: SiMongodb },
];

const Skills = () => {
  return (
    <section
      id="skill"
      className="min-h-screen scroll-mt-20 bg-[#3B3B3B]
      px-4 py-16 sm:px-6 sm:py-20 lg:px-12 xl:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 font-mono text-sm tracking-[0.3em] text-gray-400">
            WHAT I WORK WITH
          </p>

          <h1 className="text-3xl font-bold tracking-tight
          text-white sm:text-4xl md:text-5xl">
            My Skills<span className="text-gray-400">.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm
          leading-7 text-gray-300 sm:text-base">
            Technologies and tools I use to build responsive,
            modern and user-friendly web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-3
        sm:grid-cols-3 sm:gap-4
        lg:grid-cols-4 lg:gap-5
        xl:grid-cols-4">

          {skills.map((skill, index) => (
            <SkillsCard
              key={skill.title}
              {...skill}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

const SkillsCard = ({ title, category, color, icon: Icon, number }) => {
  return (
    <article
      className="group relative flex min-h-36 flex-col
      justify-between overflow-hidden rounded-2xl
      border border-white/10 bg-[#2E2F2B] p-4
      transition-all duration-300
      hover:-translate-y-1 hover:border-white/25
      hover:bg-[#292A26] hover:shadow-lg
      hover:shadow-black/10
      sm:min-h-44 sm:p-5 md:min-h-48 md:p-6"
    >
      {/* Background decoration */}
      <span className="pointer-events-none absolute -right-8
      -top-8 h-24 w-24 rounded-full bg-white/[0.03]
      transition-transform duration-500
      group-hover:scale-150" />

      {/* Top Row */}
      <div className="relative flex items-center justify-between gap-2">
        <span className="font-mono text-xs text-gray-500">
          {number}
        </span>

        <span className="rounded-full border border-white/10
        px-2 py-1 text-[10px] text-gray-400 sm:text-xs">
          {category}
        </span>
      </div>

      {/* Icon */}
      <div className="relative my-5 flex justify-center sm:my-6">
        <Icon
          aria-hidden="true"
          className={`text-5xl transition-transform
          duration-300 group-hover:scale-110
          sm:text-6xl md:text-7xl ${color}`}
        />
      </div>

      {/* Title */}
      <div className="relative flex items-center justify-between gap-2">
        <h2 className="text-sm font-semibold text-gray-200
        transition-colors group-hover:text-white
        sm:text-base md:text-lg">
          {title}
        </h2>

        <span className="text-sm text-gray-500
        transition-all duration-300
        group-hover:-translate-y-1
        group-hover:translate-x-1
        group-hover:text-white">
          ↗
        </span>
      </div>
    </article>
  );
};

export default Skills;
