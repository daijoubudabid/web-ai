import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaDribbble } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const features = [
  {
    icon: <AiOutlineThunderbolt />,
    title: "Built for speed",
    text: "Generate up to 10 images in seconds. Our AI is super fast and flexible that can generate image for you in quick times",
  },
  {
    icon: <GoStack />,
    title: "10+ AI models",
    text: "From Starble Diffusion to custom community styles. We have over 10+ AI models that will works better for you.",
  },
  {
    icon: <FaDribbble />,
    title: "Works for everything",
    text: "Generate up to 10 images in seconds. Our AI is super fast and flexible that can generate image for you in quick times.",
    col: "md:col-span-2",
  },
];

export const Features = () => {
  return (
    <section id='features' className='pb-24'>
      <div className='container'>
        <div className='mb-10 flex items-end justify-between'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='mb-4 text-3xl font-medium capitalize text-white'>
              The AI Generator that helps you Create amazing image taster.
            </h2>
          </div>
        </div>
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {features.map((item, index) => (
            <div
              className={`rounded-lg bg-default/40 p-10 ${item.col} xl:col-auto`}
              data-aos='fade-up'
              data-aos-easing='ease'
              data-aos-duration='1000'
              key={index}
            >
              <div className='text-center'>
                <p className='inline-block text-center text-[2.3rem] text-primary'>
                  {item.icon}
                </p>
                <h2 className='mt-4 text-2xl font-medium text-white/90'>
                  {item.title}
                </h2>
                <p className='mt-4 text-base font-normal text-default'>
                  {item.text}
                </p>
                <a
                  href='#'
                  className='group relative mt-5 inline-flex items-center gap-2 text-primary'
                >
                  <span className='absolute -bottom-0 h-px w-7/12 rounded bg-primary/80 transition-all duration-500 group-hover:w-full' />
                  Lead More
                  <span className='text-xl text-primary/70'>
                    <MdOutlineArrowRightAlt />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
