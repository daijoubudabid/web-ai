import { useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";

const NewNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`nav fixed top-0 z-50 flex w-full flex-wrap py-4 text-sm backdrop-blur-2xl transition-all duration-300 lg:flex-nowrap lg:justify-start ${
        scrolled ? "bg-nav_sticky" : ""
      } ${openMenu ? "nav_open" : ""}`}
    >
      <nav className='container mx-auto px-4 lg:flex lg:items-center lg:justify-between'>
        <div className='flex items-center justify-between'>
          <a href='/'>
            <img src='/logo.png' width={130} alt='' />
          </a>
          <div
            className={`menu-toggle flex items-center justify-center lg:hidden ${
              openMenu ? "open" : ""
            }`}
            onClick={handleToggleMenu}
          >
            <div className='hamburger' />
          </div>
        </div>
        <div className=''>
          <div className='mt-10 flex flex-col gap-7 px-3 text-white lg:mt-0 lg:flex-row lg:items-center lg:justify-end lg:gap-12 lg:px-0 lg:ps-5'>
            <ScrollLink
              to='home'
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className='text-base font-semibold nav-link'
              href='#'
              onClick={closeMenu}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to='features'
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className='text-base font-semibold nav-link'
              href='#'
              onClick={closeMenu}
            >
              Features
            </ScrollLink>
            <ScrollLink
              to='ai-made'
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className='text-base font-semibold nav-link'
              href='#'
              onClick={closeMenu}
            >
              AI Made
            </ScrollLink>
            <ScrollLink
              to='testimonials'
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className='text-base font-semibold nav-link'
              href='#'
              onClick={closeMenu}
            >
              Testimonials
            </ScrollLink>
          </div>
        </div>
        <div className='hidden lg:block'>
          <button className='gap-4 rounded-3xl bg-secondary px-8 py-2 font-semibold text-white hover:bg-secondary_hover lg:relative lg:right-auto lg:flex lg:items-center'>
            <IoMdDownload />
            Download
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NewNavbar;
