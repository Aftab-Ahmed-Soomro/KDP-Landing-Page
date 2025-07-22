import React from 'react'

const Banner6 = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-12 py-12 md:py-20 lg:py-30 bg-[#E8E8EA] gap-8 lg:gap-12'>
      <div className='w-full lg:w-1/2 order-2 lg:order-1'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight'>Get Professional Assistance to Begin Your Author Journey with Ease</h1>
        <p className='leading-relaxed text-sm md:text-base lg:text-lg mt-4 md:mt-6'>Let your talent outshine with KDP Pro Publishers, where our comprehensive suite of services is crafted to transform your dream into a reality. From concept to publication, we guide you through each step of the creative journey, ensuring your narrative stands out in the vast realm of literature and get published on platforms needed to uplift your author journey.</p>
        <h1 className='text-xl md:text-2xl font-semibold mt-6 md:mt-8'>What Makes Your Book The Best-Selling Book</h1>
        <div className='pl-4 md:pl-6 mt-4 md:mt-6 space-y-3 md:space-y-4'>
          <h1 className='text-sm md:text-base lg:text-lg font-semibold'>Professional Ghostwriting Across Genres</h1>
          <h1 className='text-sm md:text-base lg:text-lg font-semibold'>Expert Manuscript Editing and Formatting</h1>
          <h1 className='text-sm md:text-base lg:text-lg font-semibold'>Striking Book Cover and Author Website Design</h1>
          <h1 className='text-sm md:text-base lg:text-lg font-semibold'>Comprehensive Book Marketing and Publishing Solutions</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 lg:mt-10 pb-14">
          <button className="bg-[#F3BD07] text-white px-4 md:px-6 py-3 md:py-4 rounded-md border border-black text-sm md:text-base hover:bg-[#e6b006] transition-colors">Lets Get Started</button>
          <button className="bg-transparent border border-black text-black px-4 md:px-6 py-3 md:py-4 font-bold rounded-md text-sm md:text-base hover:bg-black hover:text-white transition-colors">+1 (213) 982-0852</button>
        </div>
      </div>
      <div className='w-full lg:w-1/2 order-1 lg:order-2 flex justify-center'>
        <img className='w-full max-w-[400px] md:max-w-[500px] lg:max-w-[650px] h-auto md:h-[500px] lg:h-[650px]' src="/Assets/imgs/book.png" alt="" />
      </div>
    </div>
  )
}

export default Banner6
