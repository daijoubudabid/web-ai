import { MdOutlineArrowRightAlt } from "react-icons/md";

const images = [
  { id: 1, src: "/img-9.jpg" },
  { id: 2, src: "/img-14.jpg" },
  { id: 3, src: "/img-21.jpg" },
  { id: 4, src: "/img-22.jpg" },
  { id: 5, src: "/img-10.jpg" },
];

const reverseImages = [
  { id: 1, src: "/img-6.jpg" },
  { id: 2, src: "/img-10.jpg" },
  { id: 3, src: "/img-11.jpg" },
  { id: 4, src: "/img-12.jpg" },
  { id: 5, src: "/img-13.jpg" },
];

export const Marquee = () => {
  return (
    <section className='pb-24'>
      <div className='container'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='max-w-2xl'>
            <h2 className='mb-4 text-3xl font-medium text-white'>
              Our Ai Made Images
            </h2>
            <p className='mb-4 text-sm font-medium text-default'>
              I am blown away by the AI-generated artwork. Each piece is a
              masterpiece in its own right, and I love how it combines the
              creativity of human artists with the innovation of AI.
            </p>
          </div>
          <div>
            <a
              href='#'
              className='inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-secondary px-6 py-2 text-white transition-all duration-300 hover:bg-secondary_hover'
            >
              Generate AI Images
            </a>
          </div>
        </div>
      </div>
      <div className='mt-14'>
        <div
          className='marquee relative m-auto flex gap-8 overflow-hidden'
          data-aos='fade-up'
          data-aos-easing='ease'
          data-aos-duration='1000'
        >
          <div className='marquee-horizontal flex min-w-full flex-shrink-0 items-center justify-around gap-6'>
            {images.map((image, index) => (
              <img
                className='aspect-1 h-60 w-full rounded-xl object-cover'
                src={image.src}
                alt=''
                key={index}
                draggable={false}
                loading='lazy'
              />
            ))}
          </div>
          <div
            className='marquee-horizontal flex min-w-full flex-shrink-0 items-center justify-around gap-6'
            aria-hidden={true}
          >
            {images.map((image, index) => (
              <img
                className='aspect-1 h-60 w-full rounded-xl object-cover'
                src={image.src}
                alt=''
                key={index}
                draggable={false}
                loading='lazy'
              />
            ))}
          </div>
        </div>
        <div
          className='marquee relative m-auto mt-7 flex gap-8 overflow-hidden'
          data-aos='fade-up'
          data-aos-easing='ease'
          data-aos-duration='1000'
        >
          <div className='marquee-horizontal-reverse flex min-w-full flex-shrink-0 items-center justify-around gap-6 delay-[31s]'>
            {reverseImages.map((image, index) => (
              <img
                className='aspect-1 h-60 w-full rounded-xl object-cover'
                src={image.src}
                alt=''
                key={index}
                draggable={false}
                loading='lazy'
              />
            ))}
          </div>
          <div
            className='marquee-horizontal-reverse flex min-w-full flex-shrink-0 items-center justify-around gap-6 delay-[31s]'
            aria-hidden={true}
          >
            {reverseImages.map((image, index) => (
              <img
                className='aspect-1 h-60 w-full rounded-xl object-cover'
                src={image.src}
                alt=''
                key={index}
                draggable={false}
                loading='lazy'
              />
            ))}
          </div>
        </div>
      </div>
      <div className='mt-12 flex items-center justify-center'>
        <a
          href='#'
          className='inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300 hover:bg-secondary_hover'
        >
          More Tools
          <span className='text-2xl'>
            <MdOutlineArrowRightAlt />
          </span>
        </a>
      </div>
    </section>
  );
};
