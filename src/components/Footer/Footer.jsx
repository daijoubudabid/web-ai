import { useEffect, useState } from "react";
import { FaHeart, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiLinkedin } from "react-icons/fi";

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <footer className='bg-default backdrop-blur-3xl'>
      <div className='container py-20'>
        <div className='grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-16'>
          <div className='col-span-2 md:col-span-2'>
            <img src='/logo.png' width={130} alt='' />
            <p className='mt-6 text-base font-medium text-default md:w-3/4'>
              Join us today and experience the power of AI-powered text creation
              for yourself!
            </p>
            <div className='mt-6'>
              <h6 className='mb-4 text-base text-white'>Follow Us :</h6>
              <ul className='flex flex-wrap items-center gap-1'>
                <li>
                  <a
                    href='#'
                    className='group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-all duration-500 hover:bg-secondary'
                  >
                    <FiFacebook className='h-5 w-5 text-default group-hover:text-white' />
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-all duration-500 hover:bg-secondary'
                  >
                    <FaInstagram className='h-5 w-5 text-default group-hover:text-white' />
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-all duration-500 hover:bg-secondary'
                  >
                    <FaXTwitter className='h-5 w-5 text-default group-hover:text-white' />
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-all duration-500 hover:bg-secondary'
                  >
                    <FiLinkedin className='h-5 w-5 text-default group-hover:text-white' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul className='flex flex-col gap-3'>
              <h5 className='mb-2 font-medium text-white/90 lg:text-lg xl:text-xl'>
                Company
              </h5>
              <li>
                <a
                  href='#'
                  className='text-base font-normal text-slate-300 transition-all hover:text-primary'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-base font-normal text-slate-300 transition-all hover:text-primary'
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-base font-normal text-slate-300 transition-all hover:text-primary'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-base font-normal text-slate-300 transition-all hover:text-primary'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className='flex flex-col gap-3'>
              <h5 className='mb-2 font-medium text-white/90 lg:text-lg xl:text-xl'>
                Service
              </h5>
              <li>
                <a
                  href=''
                  className='text-base font-normal text-slate-300 transition-all hover:text-primary'
                >
                  Developer Driven
                </a>
              </li>
              <li>
                <a
                  href=''
                  className='text-base font-normal text-slate-300 transition-all hover:text-primary'
                >
                  DMCA policy
                </a>
              </li>
              <li>
                <a
                  href=''
                  className='text-base font-normal text-slate-300 transition-all hover:text-primary'
                >
                  Private IPFS
                </a>
              </li>
              <li>
                <a
                  href=''
                  className='text-base font-normal text-slate-300 transition-all hover:text-primary'
                >
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border-t border-white/10 py-6'>
        <div className='container flex h-full flex-wrap items-center justify-center gap-4 text-center md:justify-between md:text-center'>
          <p className='text-base font-medium text-default flex items-center'>
            {currentYear} © WebAi - Design & Crafted with <span className="inline-block mx-2"><FaHeart color="red"/></span> by Dabid Marma
          </p>
          <p className='text-base font-medium text-default'>
            <a href="#">Terms Conditions & Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
