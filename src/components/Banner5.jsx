import React, { useState } from 'react'
import Tip from '../common/tip'

const Banner5 = () => {
  const [selectedButton, setSelectedButton] = useState('Fiction'); // Default to Fiction

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <>
    <div className='flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 lg:pb-20'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-center'>Check Out Our Portfolio</h1>
      <p className='text-sm md:text-base lg:text-lg xl:text-xl mt-4 text-[#0A0A0A] text-center leading-relaxed font-normal mb-4 md:mb-6 px-4 md:px-8 lg:px-12'>We have accomplished numerous projects of different sizes and complexities. Our client base includes working professionals, specialists in various industries, as well as corporations both small and large. Here are some examples of books we have authored and published for our clients:</p>
      <div className='flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-8 mb-8 md:mb-10 px-4'>
        <Tip name='Fiction' selectedButton={selectedButton} onButtonClick={handleButtonClick} />
        <Tip name='Non Fiction' selectedButton={selectedButton} onButtonClick={handleButtonClick} />
        <Tip name='Biography' selectedButton={selectedButton} onButtonClick={handleButtonClick} />
        <Tip name='Health' selectedButton={selectedButton} onButtonClick={handleButtonClick} />
        <Tip name='Romance' selectedButton={selectedButton} onButtonClick={handleButtonClick} />
        <Tip name='Children' selectedButton={selectedButton} onButtonClick={handleButtonClick} />
        <Tip name='Memoir' selectedButton={selectedButton} onButtonClick={handleButtonClick} />
        <Tip name='Horror' selectedButton={selectedButton} onButtonClick={handleButtonClick} />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-6 md:mt-8 w-full max-w-7xl'>
        <img className='rounded-[20px] w-full h-auto max-w-[250px] md:max-w-[300px] object-cover mx-auto' src="/Assets/imgs/Fiction-01.webp" alt="" />
        <img className='rounded-[20px] w-full h-auto max-w-[250px] md:max-w-[300px] object-cover mx-auto' src="/Assets/imgs/Fiction-02.webp" alt="" />
        <img className='rounded-[20px] w-full h-auto max-w-[250px] md:max-w-[300px] object-cover mx-auto' src="/Assets/imgs/Fiction-03.webp" alt="" />
        <img className='rounded-[20px] w-full h-auto max-w-[250px] md:max-w-[300px] object-cover mx-auto' src="/Assets/imgs/Fiction-04.webp" alt="" />
        <img className='rounded-[20px] w-full h-auto max-w-[250px] md:max-w-[300px] object-cover mx-auto' src="/Assets/imgs/Fiction-05.webp" alt="" />
        <img className='rounded-[20px] w-full h-auto max-w-[250px] md:max-w-[300px] object-cover mx-auto' src="/Assets/imgs/Fiction-06.webp" alt="" />
        <img className='rounded-[20px] w-full h-auto max-w-[250px] md:max-w-[300px] object-cover mx-auto' src="/Assets/imgs/Fiction-07.webp" alt="" />
        <img className='rounded-[20px] w-full h-auto max-w-[250px] md:max-w-[300px] object-cover mx-auto' src="/Assets/imgs/Fiction-08.webp" alt="" />
      </div>
    </div>
    <div
      className="w-full h-[120px] md:h-[180px] lg:h-[220px] bg-cover bg-center flex items-center justify-between px-12"
      style={{ backgroundImage: "url('/Assets/imgs/counter-banner.png')" }}
    >
      <div className='flex items-center justify-center gap-4'>
        <h1 className='text-6xl font-bold text-white'>10+</h1>
        <p className='text-2xl text-white'>Years of <br /> Experience</p>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <h1 className='text-6xl font-bold text-white'>750+</h1>
        <p className='text-2xl text-white'>Books <br /> Written</p>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <h1 className='text-6xl font-bold text-white'>10+</h1>
        <p className='text-2xl text-white'>Professional <br /> Writers</p>
      </div>
    </div>
      </>
  )
}

export default Banner5
