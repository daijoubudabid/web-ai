/* eslint-disable react/no-unescaped-entities */
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const AiMade = () => {
  return (
    <section id='ai-made' className='overflow-hidden pb-24'>
      <div className='container'>
        <div className='grid items-center gap-6 md:grid-cols-2'>
          <div
            className='relative'
            data-aos='fade-right'
            data-aos-easing='ease'
            data-aos-duration='1000'
          >
            <img src='/img-7.jpg' className='rounded-xl' alt='' />
            <div className='absolute inset-0 rounded-xl bg-default/50' />
            <div className='hidden lg:block'>
              <div className='absolute -end-52 top-10'>
                <div className='inline-block'>
                  <div className='rounded-full border border-white/10 bg-default/60 backdrop-blur-lg'>
                    <div className='max-w-sm p-6 text-center'>
                      <p className='text-base font-medium text-default'>
                        The image is original and not copied or borrowed from
                        someone else's work
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute -start-20 bottom-20 top-auto'>
                <div className='inline-block'>
                  <div className='rounded-full border border-white/10 bg-default/60 backdrop-blur-lg'>
                    <div className='px-6 py-4'>
                      <p className='text-base text-default/40'>Detailed Work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className='ms-auto max-w-md text-end'
              data-aos='fade-left'
              data-aos-easing='ease'
              data-aos-duration='1000'
            >
              <span className='rounded-md bg-primary/10 px-3 py-1 text-sm font-medium uppercase tracking-wider text-primary'>
                Unique Images
              </span>
              <h2 className='mt-4 text-3xl font-medium capitalize text-white/90'>
                Unique Images means no copyright issues
              </h2>
              <p className='mb-8 mt-5 text-base font-medium text-default'>
                The image is original and not copied or borrowed from someone
                else's work, which ensures that there are no legal restrictions
                on its use or distribution.
              </p>
              <a
                href='#'
                className='inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-secondary px-6 py-2 text-white transition-all duration-300 hover:bg-secondary_hover'
              >
                Read More
                <span className='text-2xl'>
                  <MdOutlineArrowRightAlt />
                </span>
              </a>
            </div>
          </div>
          <div
            className='relative order-1'
            data-aos='fade-left'
            data-aos-easing='ease'
            data-aos-duration='1000'
          >
            <img src='/img-8.jpg' className='rounded-xl' alt='' />
            <div className='absolute inset-0 rounded-xl bg-default/50' />
            <div className='hidden lg:block'>
              <div className='absolute -start-52 top-10'>
                <div className='inline-block'>
                  <div className='rounded-full border border-white/10 bg-default/60 backdrop-blur-lg'>
                    <div className='max-w-sm p-6 text-center'>
                      <p className='text-base font-medium text-default'>
                        The image is original and not copied or borrowed from
                        someone else's work
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute -end-20 bottom-20 top-auto'>
                <div className='inline-block'>
                  <div className='rounded-full border border-white/10 bg-default/60 backdrop-blur-lg'>
                    <div className='px-6 py-4'>
                      <p className='text-base text-default/40'>High Quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className='me-auto max-w-md text-start'
              data-aos='fade-right'
              data-aos-easing='ease'
              data-aos-duration='1000'
            >
              <span className='rounded-md bg-primary/10 px-3 py-1 text-sm font-medium uppercase tracking-wider text-primary'>
                Custom Images
              </span>
              <h2 className='mt-4 text-3xl font-medium capitalize text-white/90'>
                Create Images Your Custom AI Mode
              </h2>
              <p className='mb-8 mt-5 text-base font-medium text-default'>
                Every element in this image, from the smallest brushstroke to
                the grandest panorama, is a product of AI's creative prowess.
              </p>
              <a
                href='#'
                className='inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-secondary px-6 py-2 text-white transition-all duration-300 hover:bg-secondary_hover'
              >
                Read More
                <span className='text-2xl'>
                  <MdOutlineArrowRightAlt />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
