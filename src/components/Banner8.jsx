import React from 'react'
import FAQAccordionItem from '../common/line'

const Banner8 = () => {
  return (
    <div className='bg-[#ECF0F2] p-12'>
      <p className='text-[#F3AF0E] font-semibold'>Global Asked Questions</p>
      <h1 className='text-3xl font-semibold mb-4 mt-2'>Frequently Asked Questions</h1>
      <p className='mb-4'>Find comprehensive answers to common queries about our services <br />
      and the authorial journey.</p>
      <FAQAccordionItem text="How does the ghostwriting process work at KDP Pro Publishers?" />
      <FAQAccordionItem text="What genres do you cover in ghostwriting?" />
      <FAQAccordionItem text="How do I get started with KDP Pro Publishers?" />
      <FAQAccordionItem text="What is the turnaround time for manuscript editing?" />
      <FAQAccordionItem text="How do I get started with KDP Pro Publishers?" />
      <FAQAccordionItem text="How do I get started with KDP Pro Publishers?" />
      <p className='text-[#F3AF0E] text-2xl font-semibold'>Contact Us</p>
      <h1 className='text-2xl font-semibold mb-4 mt-2'>Join Us To Boost Your Publication And Writing Process.</h1>
    </div>
  )
}

export default Banner8
