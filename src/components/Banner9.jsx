import React from 'react'

const Banner9 = () => {
  return (
    <div className='py-24 px-60 flex justify-center gap-12'>
      {/* Left Side */}
      <div className='w-[600px]'>
        <div className='mb-70'>
        <img className='w-[350px] h-[600px]' src="/Assets/imgs/guide1.png" alt="" />
        </div>
        <div className='flex flex-col gap-16'>
        <div className='flex flex-col gap-8'>
        <h1 className='text-4xl font-semibold'>Cost-Effective Designing</h1>
        <p className='text-medium font-semibold w-[500px]'>
        Quality doesn't have to break the bank. KDP Pro Publishers offers cost-effective designing services that deliver professional, eye-catching results without compromising on style or substance. Get the best designs at competitive prices.
        </p>
      </div>
      <div className='flex flex-col gap-8'>
        <h1 className='text-4xl font-semibold'>Fast Delivery</h1>
        <p className='text-medium font-semibold'>
        Time is of the essence in the publishing world. At KDP Pro Publishers, we prioritize efficiency, ensuring your book moves swiftly through each stage of the publishing process. Enjoy fast delivery without sacrificing quality, so your work reaches readers sooner.
        </p>
      </div>
      <div className='flex flex-col gap-8'>
        <h1 className='text-4xl font-semibold'>Satisfaction Guarantee</h1>
        <p className='text-medium font-semibold'>
        Your satisfaction is our top priority. KDP Pro Publishers offers a satisfaction guarantee, promising high-quality results that meet your expectations. We're dedicated to providing services that you can be proud of, ensuring a positive publishing experience.
        </p>
      </div>
      </div>
      </div>

      {/* Middle Side */}


      {/* Right Side */}
      <div className='w-[500px] flex flex-col gap-16'>
      <div className='flex flex-col gap-8 '>
        <h1 className='text-4xl font-semibold'>Ownership Is Yours</h1>
        <p className='text-medium font-semibold'>
            At KDP Pro Publishers, we believe in empowering authors. When you publish with us, you retain full ownership and control of your work, ensuring your creative vision is preserved and respected. Your book, your rights—always.
        </p>
      </div>
      <div className='flex flex-col gap-8 '>
        <h1 className='text-4xl font-semibold'>E-Book Experts</h1>
        <p className='text-medium font-semibold'>
            Our team at KDP Pro Publishers excels in ebook publishing, transforming your manuscript into a professional digital format. With our expertise, your ebook will be optimized for all major platforms, ensuring a seamless reading experience for your audience.
        </p>
      </div>
      <div className='flex flex-col gap-8 '>
        <h1 className='text-4xl font-semibold'>It's Original</h1>
        <p className='text-medium font-semibold'>
        Originality is at the heart of our services at KDP Pro Publishers. We work closely with you to maintain the authenticity and uniqueness of your story, ensuring your book stands out in the crowded marketplace. Your voice, your story—uniquely yours.
        </p>
      </div>
      <div className='mb-70'>
        <img className='w-[350px] h-[600px]' src="/Assets/imgs/guide2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner9
