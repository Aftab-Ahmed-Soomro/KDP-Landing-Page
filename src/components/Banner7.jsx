import React from 'react';

const Banner7 = () => {
  return (
    <div className="bg-[#F5B715] flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-xl md:text-4xl font-semibold text-gray-900 mb-8 leading-tight">
          Self Publishing Made Easy
        </h1>
        
        {/* Description */}
        <p className="text-medium md:text-lg mb-12 max-w-5xl mx-auto leading-relaxed">
        Self publishing allows you to maintain complete control over your work. Our self publishing services guide you through every step of the process, from manuscript submission to final publication. We support you in turning your dream of book publishing into reality.
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 lg:mt-10 justify-center">
          <button className="bg-[#F3BD07] text-white px-4 md:px-6 py-3 md:py-4 rounded-md border border-black text-sm md:text-base hover:bg-[#e6b006] transition-colors">Lets Get Started</button>
          <button className="bg-transparent border border-black text-white px-4 md:px-6 py-3 md:py-4 font-bold rounded-md text-sm md:text-base hover:bg-black hover:text-white transition-colors">+1 (213) 982-0852</button>
        </div>
      </div>
    </div>
  );
}

export default Banner7