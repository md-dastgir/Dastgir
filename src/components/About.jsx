
import MyPic from "../../public/images/myPic.jpeg";

import { MdOutlineArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-20 bg-[#3B3B3B]
      px-4 py-16 text-white sm:px-6 sm:py-20
      lg:px-12 xl:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 font-mono text-sm tracking-[0.3em] text-gray-400">
            GET TO KNOW ME
          </p>

          <h1 className="text-3xl font-bold tracking-tight
          sm:text-4xl md:text-5xl">
            About Me<span className="text-gray-400">.</span>
          </h1>
        </div>

        {/* Main Card */}
        <div className="grid overflow-hidden rounded-2xl
        border border-white/10 bg-[#2E2F2B]
        grid-cols-1 md:grid-cols-5">

          {/* Text Content */}
          <div className="flex flex-col justify-center
          p-5 sm:p-8 md:col-span-3 md:p-10 lg:p-12">

            <span className="mb-5 w-fit rounded-full border
            border-white/10 px-3 py-1.5 font-mono text-xs
            tracking-wider text-gray-300">
              WEB DEVELOPER
            </span>

            <h2 className="mb-6 text-2xl font-semibold
            leading-tight sm:text-3xl">
              Building digital experiences with
              <span className="text-gray-400"> purpose.</span>
            </h2>

            <div className="space-y-4 text-sm leading-7
            text-gray-300 sm:text-base sm:leading-8">

              <p>
                Hi, I'm Md Dastgir, a B.Tech student at IEC
                College of Engineering and Technology, Greater
                Noida. I'm passionate about web development
                and enjoy building clean, responsive, and
                user-friendly websites.
              </p>

              <p>
                I love learning new technologies, improving
                my coding skills, and turning ideas into
                practical digital experiences. I'm continuously
                exploring modern web development tools and
                working on projects to strengthen my technical
                abilities.
              </p>

              <p>
                My goal is to grow as a developer, contribute
                to meaningful projects, and create web
                experiences that are both functional and
                visually appealing.
              </p>

            </div>

            {/* Signature */}
            <div className="mt-8 flex items-center justify-between
            gap-4 border-t border-white/10 pt-6">

              <div>
                <p className="font-mono text-sm font-bold
                tracking-[0.18em] text-white">
                  MD DASTGIR
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Aspiring Web Developer
                </p>
              </div>

              <a
                href="#project"
                className="inline-flex shrink-0 items-center
                gap-2 rounded-lg border border-white/15
                px-3 py-2.5 text-sm text-gray-200
                transition-all hover:border-white/40
                hover:bg-white/5 sm:px-4"
              >
                My Work
                <MdOutlineArrowOutward size={18} />
              </a>

            </div>
          </div>

          {/* Image Content */}
          <div className="relative min-h-[320px] overflow-hidden
          bg-[#363833] sm:min-h-[420px] md:col-span-2
          md:min-h-full">

            <img
              src={MyPic}
              alt="Md Dastgir"
              loading="lazy"
              className="absolute inset-0 h-full w-full
              object-cover object-center
              transition-transform duration-700
              hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="pointer-events-none absolute inset-0
            bg-gradient-to-t from-black/60 via-transparent
            to-transparent" />

            {/* Image Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <p className="font-mono text-xs tracking-[0.2em]
              text-gray-300">
                BASED IN INDIA
              </p>

              <p className="mt-2 text-xl font-semibold sm:text-2xl">
                Md Dastgir
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
