import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

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
export const Hero = () => {
  return (
    <section id='home' className='relative overflow-hidden pb-20 pt-[4.6rem]'>
      <div className='px-6 py-4'>
        <div className='rounded-2xl bg-slate-950/40'>
          <div className='container'>
            <div className='p-6'>
              <div className='relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
                <div className='-z-1 absolute start-0 top-0 h-14 w-14 animate-[spin_10s_linear_infinite] rounded-2xl rounded-br-none rounded-tl-none bg-indigo-600 bg-primary' />
                <div className='-z-1 absolute bottom-0 end-0 h-14 w-14 animate-ping rounded-full bg-indigo-600 bg-primary' />
                <div
                  data-aos='fade-right'
                  data-aos-easing='ease'
                  data-aos-duration='1000'
                >
                  <span className='rounded-md bg-primary/20 px-3 py-1 text-sm font-medium uppercase tracking-wider text-primary'>
                    Meet Your Co-Pilot
                  </span>
                  <h1 className='my-4 max-w-lg text-4xl font-medium text-white md:text-5xl/tight'>
                    Image generate with our ai instantly.
                  </h1>
                  <p className='text-default md:text-lg'>
                    Get AI generated images from text straight from your
                    <br />
                    browser very easily.
                  </p>
                  <a
                    href='#'
                    className='group mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-1 py-1 pe-4 text-white transition-all duration-300 hover:bg-primary/100 hover:text-white'
                  >
                    <span className='me-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 text-primary transition-all duration-300 hover:text-white group-hover:bg-white/10 group-hover:text-white '>
                      <MdOutlinePhotoSizeSelectActual size={20} />
                    </span>
                    Generate Images
                  </a>
                </div>
                <div
                  className='mx-auto h-[595px] overflow-hidden'
                  data-aos='zoom-in'
                  data-aos-easing='ease'
                  data-aos-duration='1000'
                >
                  <div className='marquee grid grid-cols-2 gap-6'>
                    <div className='relative m-auto flex flex-col gap-6 overflow-hidden'>
                      <div className='marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6'>
                        {images.map((image, index) => (
                          <img
                            className='aspect-1 h-full w-60 rounded-xl object-cover'
                            src={image.src}
                            alt=''
                            key={index}
                            draggable={false}
                            loading='lazy'
                          />
                        ))}
                      </div>
                      <div
                        aria-hidden={true}
                        className='marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6'
                      >
                        {images.map((image, index) => (
                          <img
                            className='aspect-1 h-full w-60 rounded-xl object-cover'
                            src={image.src}
                            alt=''
                            key={index}
                            draggable={false}
                            loading='lazy'
                          />
                        ))}
                      </div>
                    </div>
                    <div className='marquee-reverse m-auto flex flex-col gap-6 overflow-hidden'>
                      <div className='marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6'>
                        {reverseImages.map((image, index) => (
                          <img
                            className='aspect-1 h-full w-60 rounded-xl object-cover'
                            src={image.src}
                            alt=''
                            key={index}
                            draggable={false}
                            loading='lazy'
                          />
                        ))}
                      </div>

                      <div
                        aria-hidden={true}
                        className='marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6'
                      >
                        {reverseImages.map((image, index) => (
                          <img
                            className='aspect-1 h-full w-60 rounded-xl object-cover'
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
