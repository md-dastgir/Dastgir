
import { MdOutlineCopyright } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#2E2F2B]
    px-4 py-6 text-gray-400 sm:px-6 md:px-12">

      <div className="mx-auto flex max-w-7xl flex-col
      items-center justify-between gap-4 sm:flex-row">

        {/* Copyright */}
        <p className="flex flex-wrap items-center
        justify-center gap-1.5 text-center text-xs
        leading-6 sm:text-sm">
          <MdOutlineCopyright size={17} />
          <span>{currentYear}</span>
          <span className="font-semibold text-gray-200">
            Md Dastgir.
          </span>
          <span>All rights reserved.</span>
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">

          <a
            href="https://github.com/md-dastgir"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-lg transition-colors
            hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/md-dastgir"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-lg transition-colors
            hover:text-white"
          >
            <FaLinkedin />
          </a>

          <a
            href="#home"
            className="text-xs font-medium tracking-wide
            transition-colors hover:text-white sm:text-sm"
          >
            Back to top ↑
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
