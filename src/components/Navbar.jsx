
import { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const menuList = [
  { label: "HOME", link: "#home" },
  { label: "ABOUT", link: "#about" },
  { label: "SKILL", link: "#skill" },
  { label: "PROJECT", link: "#project" },
  { label: "CONTACT", link: "#contact" },
];

const Navbar = () => {
    
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = menuList
      .map(({ link }) => document.querySelector(link))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Support direct links such as /#project
    const hash = window.location.hash.slice(1);
    if (menuList.some((item) => item.link === `#${hash}`)) {
      setActiveSection(hash);
    }

    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      if (menuList.some((item) => item.link === `#${id}`)) {
        setActiveSection(id);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigation = (link) => {
    setActiveSection(link.slice(1));
    setOpenMenu(false);
  };

  const getLinkClass = (link) => {
    const isActive = activeSection === link.slice(1);

    return `relative rounded-lg px-4 py-2.5 text-sm
      font-medium tracking-wide transition-all duration-200
      ${
        isActive
          ? "bg-[#3B3B3B] text-white"
          : "text-gray-400 hover:bg-[#363833] hover:text-white"
      }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#2E2F2B]
    text-gray-400 shadow-lg shadow-black/10">

      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex min-h-[72px]
        max-w-[1600px] items-center justify-between
        px-4 py-3 sm:px-6 md:px-12"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavigation("#home")}
          className="shrink-0 font-mono text-2xl font-bold
          tracking-wider text-white transition-opacity
          hover:opacity-80"
        >
          MD<span className="text-gray-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 min-[701px]:flex">
          {menuList.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={() => handleNavigation(item.link)}
              aria-current={
                activeSection === item.link.slice(1)
                  ? "location"
                  : undefined
              }
              className={getLinkClass(item.link)}
            >
              {item.label}

              {activeSection === item.link.slice(1) && (
                <span className="absolute bottom-1 left-4 right-4
                h-0.5 rounded-full bg-white/70" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpenMenu((prev) => !prev)}
          aria-label={openMenu ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={openMenu}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center
          rounded-lg text-2xl text-white transition-colors
          hover:bg-[#3B3B3B] min-[701px]:hidden"
        >
          {openMenu ? <RxCross2 /> : <LuMenu />}
        </button>

        {/* Mobile Navigation */}
        {openMenu && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full
            max-h-[calc(100dvh-72px)] overflow-y-auto
            border-t border-white/10 bg-[#2E2F2B]
            p-4 shadow-xl min-[701px]:hidden"
          >
            <div className="flex flex-col gap-2">
              {menuList.map((item) => {
                const isActive =
                  activeSection === item.link.slice(1);

                return (
                  <a
                    key={item.link}
                    href={item.link}
                    onClick={() => handleNavigation(item.link)}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex items-center justify-between
                    rounded-xl border px-4 py-3.5 text-sm
                    font-medium tracking-wide transition-all
                    ${
                      isActive
                        ? "border-white/10 bg-[#3B3B3B] text-white"
                        : "border-transparent text-gray-400 hover:bg-[#363833] hover:text-white"
                    }`}
                  >
                    {item.label}

                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
