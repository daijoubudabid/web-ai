
export const GradientBg = () => {
  return (
    <div>
    <div className='fixed top-0 -z-10'>
      <div className='h-[300px] w-[300px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40 blur-[200px] lg:h-[500px] lg:w-[500px]'></div>
    </div>
    <div className='fixed end-0 top-0 -z-10'>
      <div className='h-[300px] w-[300px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40 blur-[200px] lg:h-[500px] lg:w-[500px]'></div>
    </div>
    <div className='fixed inset-0 -z-10 hidden items-center justify-center lg:flex'>
      <div className='h-[300px] w-[300px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40 blur-[200px] lg:h-[500px] lg:w-[500px]'></div>
    </div>
    <div className='fixed bottom-0 start-0 -z-10'>
      <div className='h-[300px] w-[300px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40 blur-[200px] lg:h-[500px] lg:w-[500px]'></div>
    </div>
    <div className='fixed bottom-0 end-0 -z-10'>
      <div className='h-[300px] w-[300px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40 blur-[200px] lg:h-[500px] lg:w-[500px]'></div>
    </div>
  </div>
  )
}
