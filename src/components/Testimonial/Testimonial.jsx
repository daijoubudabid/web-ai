import { useEffect } from "react";
import { BiSolidQuoteRight } from "react-icons/bi";
import { IoIosStarOutline } from "react-icons/io";
import { tns } from "tiny-slider";

const avatars = [
  {
    src: "/img-1.png",
    position: "start-32 top-10",
  },
  {
    src: "/img-2.png",
    position: "top-64 start-10",
  },
  {
    src: "/img-3.png",
    position: "bottom-10 start-32",
  },
  {
    src: "/img-4.png",
    position: "end-32 top-10",
  },
  {
    src: "/img-5.png",
    position: "end-10 top-64",
  },
  {
    src: "/img-6.png",
    position: "end-32 bottom-10",
  },
];

const reviews = [
  {
    text: "Amet minim mollil non deserunt ulliamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ",
    avatar: "/img-1.png",
    name: "Shane Watson",
    prof: "CEO & Founder",
  },
  {
    text: "Amet minim mollil non deserunt ulliamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ",
    avatar: "/img-2.png",
    name: "Marry Jane",
    prof: "CEO & Founder",
  },
  {
    text: "Amet minim mollil non deserunt ulliamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ",
    avatar: "/img-3.png",
    name: "Pepper Pots",
    prof: "CEO & Founder",
  },
];

export const Testimonial = () => {
  useEffect(() => {
    let slider = tns({
      container: ".testimonials",
      mode: "carousel",
      controls: false,
      swipeAngle: false,
      nav: true,
      navAsThumbnails: true,
      navContainer: ".nav-buttons",
      autoplayButtonOutput: false,
      autoplayResetOnVisibility: false,
      items: 1,
      mouseDrag: true,
      speed: 700,
      loop: true,
      touch: true,
      lazyload: true,
      slideBy: "page",
      autoplay: true,
      responsive: {
        0: {
          item: 1,
        },
      },
    });
    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <section
      id='testimonials'
      className='pb-24'
      data-aos='fade-up'
      data-aos-easing='ease'
      data-aos-duration='1000'
    >
      <div className='container'>
        <div className='relative rounded-xl bg-default p-6 backdrop-blur-sm md:p-20'>
          <div className='hidden lg:block'>
            {avatars.map((item, index) => (
              <div
                key={index}
                className={`-z-1 absolute ${item.position} h-14 w-14`}
              >
                <img src={item.src} alt='' className='rounded-full' />
              </div>
            ))}
          </div>
          <div className='testimonials'>
            {reviews.map((item, index) => (
              <div
                key={index}
                className='mx-auto text-center active:cursor-grabbing'
              >
                <BiSolidQuoteRight className='mx-auto size-10 text-primary' />
                <p className='mx-auto mt-7 max-w-2xl text-center text-lg font-medium text-white/95'>
                  {item.text}
                </p>
                <img
                  src={item.avatar}
                  alt=''
                  className='mx-auto my-8 h-16 rounded-full'
                />
                <h2 className='text-xl font-medium text-default'>
                  {item.name}
                </h2>
                <p className='mt-1 text-sm text-default/70'>{item.prof}</p>
                <div className='mt-1 flex items-center justify-center gap-1'>
                  <IoIosStarOutline color='yellow' />
                  <IoIosStarOutline color='yellow' />
                  <IoIosStarOutline color='yellow' />
                  <IoIosStarOutline color='yellow' />
                  <IoIosStarOutline color='yellow' />
                </div>
              </div>
            ))}
          </div>
          <div
            className='nav-buttons mt-6 flex items-center
          justify-center gap-4'
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
