import { useState } from "react";
import { IoMdDownload } from "react-icons/io";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className='fixed top-0 z-[1000] w-full bg-nav_sticky py-[1rem] backdrop-blur-[40px] lg:bg-transparent'>
      <div className='container flex items-center justify-between'>
        <img src='/logo.png' width={130} />
        <nav
          className={`nav absolute left-0 top-[100%] float-end w-full bg-nav_sticky text-white lg:relative lg:w-auto lg:bg-transparent lg:text-white ${
            openMenu ? "nav_open" : ""
          }`}
        >
          <ul className='container mx-auto flex flex-col gap-x-14 gap-y-10 p-10 lg:w-full lg:flex-row lg:p-0'>
            <li>
              <a href='' className='font-semibold'>
                Home
              </a>
            </li>
            <li>
              <a href='' className='font-semibold'>
                Features
              </a>
            </li>
            <li>
              <a href='' className='font-semibold'>
                AI Made
              </a>
            </li>
            <li>
              <a href='' className='font-semibold'>
                Testimonials
              </a>
            </li>
          </ul>
        </nav>

        <button className='hidden gap-4 rounded-3xl bg-[#7C3AED] px-8 py-2 font-semibold text-white lg:relative lg:right-auto lg:flex lg:items-center'>
          <IoMdDownload />
          Download
        </button>

        <div
          className={`menu-toggle flex items-center justify-center lg:hidden ${
            openMenu ? "open" : ""
          }`}
          onClick={handleToggleMenu}
        >
          <div className='hamburger'></div>
        </div>
      </div>
    </header>
  );
};
