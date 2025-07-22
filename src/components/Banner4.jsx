import React from 'react'
import Card from '../common/Card'

const Banner4 = () => {
  return (
    <div className='bg-[#F1FAFA] p-4 md:p-8 lg:p-12'>
      <h1 className='text-xl md:text-2xl lg:text-3xl font-medium my-2 text-center md:text-left'>Dive Into A Realm Of Boundless Creativity
      With KDP Pro Publishers.</h1>
      <p className='text-base md:text-lg lg:text-xl text-center md:text-left mb-6 md:mb-8 lg:mb-24'>Our commitment extends beyond writing – explore a myriad of imaginative services, ensuring your path from idea to publication is not just seamless but truly extraordinary.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8 lg:mt-10'>
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
      </div>
    </div>
  )
}

export default Banner4
