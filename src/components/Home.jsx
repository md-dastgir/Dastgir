
import MyResume from "../../public/MD_DASTGIR.pdf";

import { GoDownload } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-80px)]
      flex-col justify-center overflow-hidden
      bg-[#3B3B3B] px-4 py-16 text-white
      sm:px-6 md:px-12 lg:px-16"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute right-0 top-20
      h-64 w-64 rounded-full bg-white/[0.03] blur-3xl
      sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute bottom-10
      left-0 h-52 w-52 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-7xl
      flex-1 flex-col justify-center">

        <TopContent />
        <BottomContent />

      </div>
    </section>
  );
};

const TopContent = () => {
  return (
    <div className="flex flex-col items-start gap-5">

      <span className="rounded-full border border-white/10
      bg-[#2E2F2B] px-4 py-2 font-mono text-xs
      tracking-[0.2em] text-gray-300 sm:text-sm">
        HELLO, I'M A DEVELOPER
      </span>

      <h1 className="text-5xl font-bold leading-[1.1]
      tracking-tight sm:text-6xl md:text-7xl
      lg:text-8xl">
        I'm <span className="text-gray-400">Dastgir.</span>
      </h1>

      <h2 className="text-2xl font-medium leading-snug
      text-gray-200 sm:text-3xl md:text-4xl lg:text-5xl">
        Full Stack Developer
      </h2>

      <p className="max-w-2xl text-sm leading-7
      text-gray-300 sm:text-base sm:leading-8 md:text-lg">
        I build clean, responsive and user-friendly web
        applications with modern technologies. I'm passionate
        about turning ideas into meaningful digital experiences
        and continuously improving my development skills.
      </p>

      {/* Hero Actions */}
      <div className="mt-3 flex w-full flex-col gap-3
      sm:w-auto sm:flex-row sm:flex-wrap">

        <a
          href="#project"
          className="inline-flex min-h-12 items-center
          justify-center gap-2 rounded-xl bg-gray-200
          px-6 py-3 text-sm font-semibold text-[#2E2F2B]
          transition-colors hover:bg-white
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-white"
        >
          Explore My Work
          <MdOutlineArrowOutward size={18} />
        </a>

        <a
          href="#contact"
          className="inline-flex min-h-12 items-center
          justify-center rounded-xl border border-white/20
          px-6 py-3 text-sm font-semibold text-gray-200
          transition-colors hover:bg-white/5
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-white"
        >
          Contact Me
        </a>

      </div>
    </div>
  );
};

const BottomContent = () => {
  return (
    <div className="mt-16 flex flex-col gap-6 border-t
    border-white/10 pt-6 sm:mt-20 sm:flex-row
    sm:items-center sm:justify-between md:mt-24">

      {/* Resume */}
      <a
        href={MyResume}
        download="MD_DASTGIR.pdf"
        className="inline-flex min-h-12 w-fit items-center
        justify-center gap-2 rounded-xl border
        border-white/20 px-5 py-3 text-sm font-semibold
        text-gray-200 transition-all hover:border-white/40
        hover:bg-white/5 focus-visible:outline-2
        focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <GoDownload size={19} />
        Download Resume
      </a>

      {/* Social Links */}
      <div className="flex flex-wrap items-center gap-3">

        <span className="mr-2 font-mono text-xs
        tracking-widest text-gray-400">
          FOLLOW ME
        </span>

        <a
          href="https://github.com/md-dastgir"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="flex h-11 w-11 items-center
          justify-center rounded-xl border border-white/10
          bg-[#2E2F2B] text-xl text-gray-300
          transition-all hover:-translate-y-1
          hover:border-white/30 hover:text-white"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/md-dastgir"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="flex h-11 w-11 items-center
          justify-center rounded-xl border border-white/10
          bg-[#2E2F2B] text-xl text-gray-300
          transition-all hover:-translate-y-1
          hover:border-white/30 hover:text-white"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:YOUR_EMAIL@gmail.com"
          aria-label="Send me an email"
          className="flex h-11 w-11 items-center
          justify-center rounded-xl border border-white/10
          bg-[#2E2F2B] text-2xl text-gray-300
          transition-all hover:-translate-y-1
          hover:border-white/30 hover:text-white"
        >
          <IoIosMail />
        </a>

      </div>
    </div>
  );
};

export default Home;
