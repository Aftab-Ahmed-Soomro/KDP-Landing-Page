import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-white mt-20 grid grid-cols-1 lg:grid-cols-2 flex items-center justify-center p-4 md:p-8 lg:p-12 gap-8 lg:gap-12">
      <div className="order-2 lg:order-1">
        <img 
          className="w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto md:h-[400px] lg:h-[500px] mx-auto" 
          src="https://kdppropublishers.com/images/home-about-01.png" 
          alt="KDP Pro Publishers Team" 
        />
      </div>
      <div className="flex flex-col gap-3 md:gap-4 order-1 lg:order-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
          KDP Pro Publishers are poised to make your publishing step unprecedentedly smooth
        </h1> 
        <p className="leading-relaxed text-sm md:text-base lg:text-lg">
          It's time to showcase your extraordinary success story that defied all odds! Hire a publisher now to publish your voice and share your narrative with the world. Our commitment to incorporating your feedback ensures a collaborative process that results in manuscripts poised to influence bibliophiles, leaving them anticipating more literary gems from your pen.
          Besides that, we adeptly finalize your manuscripts, giving careful consideration to your concepts. Along every step of the publishing journey, we stand alongside you, approaching your project with the same dedication as if it were our own.
        </p>
        <p className="leading-relaxed text-sm md:text-base lg:text-lg">
          Our focus remains on understanding your vision for the book, ensuring that your desires and expectations are at the forefront of the publishing process.
        </p>
        <ActionButtons />
      </div>
    </div>
  );
};

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 lg:mt-10">
      <button className="bg-[#F3BD07] text-white px-4 md:px-6 py-3 md:py-4 rounded-md border border-black text-sm md:text-base hover:bg-[#e6b006] transition-colors">
        Lets Get Started
      </button>
      <button className="bg-transparent border border-black text-black px-4 md:px-6 py-3 md:py-4 font-bold rounded-md text-sm md:text-base hover:bg-black hover:text-white transition-colors">
        +1 (213) 982-0852
      </button>
    </div>
  );
};

export default AboutSection; 