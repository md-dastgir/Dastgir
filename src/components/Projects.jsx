
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

import ems from "../../public/images/ems.jfif";
import zerodha from "../../public/images/zerodha.png";
import airbnb from "../../public/images/airbnb.jfif";

const projects = [
  {
    number: "01",
    title: "Employee Management System",
    category: "Web Application",
    description:
      "A platform to manage employee records, information and daily workflows efficiently.",
    image: ems,
    liveLink: "", // Add your deployed website URL
    sourceLink:
      "https://github.com/md-dastgir/Employee-Management-System",
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Zerodha",
    category: "Fintech UI",
    description:
      "A trading platform-inspired interface with a clean layout and responsive design.",
    image: zerodha,
    liveLink: "",
    sourceLink: "https://github.com/md-dastgir/ZerodhaApp",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    number: "03",
    title: "Airbnb Clone",
    category: "Booking Platform",
    description:
      "A modern property discovery interface inspired by Airbnb's booking experience.",
    image: airbnb,
    liveLink: "",
    sourceLink: "https://github.com/md-dastgir/AirbnbClone",
    tech: ["React", "JavaScript", "CSS"],
  },
];

const Projects = () => {
  return (
    <section
      id="project"
      className="min-h-screen bg-[#3B3B3B] px-4 py-16
      sm:px-6 sm:py-20 lg:px-12 xl:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 font-mono text-sm tracking-[0.3em] text-gray-300">
            MY WORK
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white
          sm:text-4xl md:text-5xl">
            Featured Projects<span className="text-gray-400">.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7
          text-gray-300 sm:text-base">
            A collection of projects showcasing my skills,
            creativity and passion for building web experiences.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2
        lg:grid-cols-3 lg:gap-7">

          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              {...project}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

const ProjectCard = ({
  number,
  title,
  category,
  description,
  image,
  liveLink,
  sourceLink,
  tech,
}) => {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden
      rounded-2xl border border-white/10 bg-[#2E2F2B]
      transition-all duration-300
      hover:-translate-y-1 hover:border-white/25
      hover:shadow-xl hover:shadow-black/20"
    >
      {/* Image Preview */}
      <div className="relative m-3 mb-0 overflow-hidden
      rounded-xl bg-[#3B3B3B]">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={`${title} project preview`}
            loading="lazy"
            className="h-full w-full object-cover
            transition-transform duration-500
            ease-out group-hover:scale-105"
          />
        </div>

        {/* Project Number */}
        <span className="absolute left-3 top-3 rounded-md
        border border-white/15 bg-black/60 px-3 py-1
        font-mono text-xs text-white backdrop-blur-md">
          {number}
        </span>

        {/* Category */}
        <span className="absolute bottom-3 left-3 rounded-full
        bg-[#2E2F2B]/90 px-3 py-1.5 text-xs font-medium
        text-white backdrop-blur-md">
          {category}
        </span>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        <div className="mb-3 flex items-start justify-between gap-3">
          <h2 className="text-xl font-semibold leading-snug
          text-white transition-colors duration-300
          group-hover:text-gray-300 sm:text-2xl">
            {title}
          </h2>

          <span className="mt-1 shrink-0 text-gray-400">
            <MdOutlineArrowOutward size={22} />
          </span>
        </div>

        <p className="mb-5 flex-1 text-sm leading-6 text-gray-400">
          {description}
        </p>

        {/* Technology Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/10
              bg-white/[0.04] px-2.5 py-1 text-xs
              text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto grid grid-cols-2 gap-3">
          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center justify-center
              gap-2 rounded-lg bg-white px-3 py-2
              text-sm font-semibold text-[#242521]
              transition-colors hover:bg-gray-200
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-white"
            >
              Live Demo
              <MdOutlineArrowOutward size={18} />
            </a>
          ) : (
            <span
              aria-disabled="true"
              title="Add your deployed project URL"
              className="flex min-h-11 cursor-not-allowed
              items-center justify-center gap-2 rounded-lg
              bg-white/10 px-3 py-2 text-sm font-medium
              text-gray-500"
            >
              Demo Soon
            </span>
          )}

          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center justify-center
            gap-2 rounded-lg border border-white/15 px-3 py-2
            text-sm font-medium text-white transition-colors
            hover:border-white/40 hover:bg-white/10
            focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-white"
          >
            <FiGithub size={18} />
            Source Code
          </a>
        </div>

      </div>
    </article>
  );
};

export default Projects;
