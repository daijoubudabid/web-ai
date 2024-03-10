import { FiSend } from "react-icons/fi";

export const Gallery = () => {
  return (
    <section className='pb-24'>
      <div className='container'>
        <div className='grid gap-6 lg:grid-cols-2'>
          <div
            className='relative overflow-hidden rounded-lg'
            data-aos='fade-right'
            data-aos-easing='ease'
            data-aos-duration='1000'
          >
            <img
              loading='lazy'
              src='/img-10.jpg'
              className='mx-auto h-full w-full object-cover object-top'
              alt=''
              width={640}
              height={805}
            />

            <div className='absolute inset-0'>
              <div className='h-full w-full'>
                <div className='flex h-full w-full items-end p-5'>
                  <div className='w-full rounded bg-white/10 p-6 backdrop-blur-md'>
                    <h2 className='text-center text-lg font-normal text-default'>
                      Gaze upon the awe-inspiring creation of artificial
                      intelligence, a majestic dragon of epic proportions.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className='grid gap-6 md:grid-cols-2'
            data-aos='fade-left'
            data-aos-easing='ease'
            data-aos-duration='1000'
          >
            <div className='relative overflow-hidden rounded-lg'>
              <img
                loading='lazy'
                src='/img-13.jpg'
                className='mx-auto h-full w-full object-cover object-top'
                alt=''
                width={640}
                height={805}
              />

              <div className='absolute inset-0'>
                <div className='h-full w-full'>
                  <div className='flex h-full w-full items-end p-5'>
                    <div className='w-full rounded bg-white/10 p-6 backdrop-blur-md'>
                      <h2 className='text-center text-lg font-normal text-default'>
                        An enchanting ice dragon born from the algorithms of AI
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative overflow-hidden rounded-lg'>
              <img
                loading='lazy'
                src='/img-8.jpg'
                className='mx-auto h-full w-full object-cover object-top'
                alt=''
                width={640}
                height={805}
              />

              <div className='absolute inset-0'>
                <div className='h-full w-full'>
                  <div className='flex h-full w-full items-end p-5'>
                    <div className='w-full rounded bg-white/10 p-6 backdrop-blur-md'>
                      <h2 className='text-center text-lg font-normal text-default'>
                        A marvel of mechanical artistry and AI ingenuity
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className='relative overflow-hidden rounded-lg'
            data-aos='fade-right'
            data-aos-easing='ease'
            data-aos-duration='1000'
          >
            <img
              loading='lazy'
              src='/img-11.jpg'
              className='mx-auto h-full w-full object-cover object-top'
              alt=''
              width={640}
              height={805}
            />

            <div className='absolute inset-0'>
              <div className='h-full w-full'>
                <div className='flex h-full w-full items-end p-5'>
                  <div className='w-full rounded bg-white/10 p-6 backdrop-blur-md'>
                    <h2 className='text-center text-lg font-normal text-default'>
                      In the heart of an enchanted forest, an AI-born dragon
                      stands as a guardian of the woods
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className='relative overflow-hidden rounded-lg'
            data-aos='fade-left'
            data-aos-easing='ease'
            data-aos-duration='1000'
          >
            <img
              loading='lazy'
              src='/img-12.jpg'
              className='mx-auto h-full w-full object-cover object-top'
              alt=''
              width={640}
              height={805}
            />

            <div className='absolute inset-0'>
              <div className='h-full w-full'>
                <div className='flex h-full w-full items-end justify-end p-5'>
                  <a
                    href='#'
                    className='flex items-center gap-6 rounded-full bg-white/10 px-3 py-2 text-default backdrop-blur-md'
                  >
                    Explore More
                    <span>
                      <FiSend size={20} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
