
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";


const Skills = () => {
  return (
    <div id="skill" className="pb-20 px-8 min-h-screen">
      <h1 className="text-5xl text-white text-center py-8 mt-10">Skills</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 lg:gap-6 gap-3">
        <SkillsCard title="HTML5" color="text-rose-400">
          <FaHtml5 />
        </SkillsCard>

        <SkillsCard title="CSS3" color="text-blue-500">
          <FaCss3Alt />
        </SkillsCard>

        <SkillsCard title="JAVASCRIPT" color="text-yellow-400">
          <FaJsSquare />
        </SkillsCard>

        <SkillsCard title="REACT" color="text-cyan-400">
          <FaReact />
        </SkillsCard>

        <SkillsCard title="TAILWIND" color="text-cyan-500">
          <SiTailwindcss />
        </SkillsCard>

        <SkillsCard title="GIT" color="text-rose-400">
          <FaGitAlt />
        </SkillsCard>

        <SkillsCard title="AWS" color="text-yellow-600">
          <FaAws />
        </SkillsCard>

        <SkillsCard title="BOOTSTRAP" color="text-[#A255F3]">
          <FaBootstrap />
        </SkillsCard>

        <SkillsCard title="NODE" color="text-green-400">
          <FaNodeJs />
        </SkillsCard>

        <SkillsCard title="EXPRESS" color="text-green-500">
          <SiExpress />
        </SkillsCard>

        <SkillsCard title="POSTGRE" color="text-blue-300">
          <SiPostgresql />
        </SkillsCard>

        <SkillsCard title="MONGODB" color="text-green-500">
          <DiMongodb />
        </SkillsCard>
      </div>
    </div>
  );
};

const SkillsCard = ({ children, title, color }) => {
  return (
    <div>
      <div className="bg-[#3B3B3B] md:md:w-[275px] md:md:h-[275px] flex justify-center items-center rounded-xl hover:bg-[#363833] relative">
        <div className="hover:bg-[#363833]/70 rounded-xl w-full h-full absolute top-0 flex justify-center items-center opacity-0 hover:opacity-100 hover:cursor-pointer">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
        </div>
        {<h1 className={`text-9xl ${color}`}>{children}</h1>}
      </div>
    </div>
  );
};

export default Skills;
