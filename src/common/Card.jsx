import { ArrowRight, Square } from 'lucide-react';

export default function Card() {
  return (
    <div >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="bg-white shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 rounded-lg">
          <div className="flex flex-col lg:flex-row min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            {/* Left Content Section */}
            <div className="p-4 md:p-6 lg:p-8 flex flex-col justify-center w-full lg:w-[400px] bg-[#F2F9FF]">
              {/* Decorative Icon */}
              <div className="mb-6 md:mb-8 lg:mb-10">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border-2 border-gray-400 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 border border-gray-400 rounded-sm flex items-center justify-center">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Service Number */}
              <div className="mb-3 md:mb-4">
                <span className="font-bold text-lg md:text-xl">01</span>
              </div>

              {/* Title */}
              <h2 className="font-bold text-lg md:text-xl text-gray-900 mb-2 leading-tight">
                Fiction<br />Writing
              </h2>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-700 mb-6 md:mb-8">
                Embark on an imaginative journey with our Fiction Writing service. Our storytellers craft compelling tales, immersing readers in vibrant worlds, rich characters, and gripping plots.
              </p>

              {/* Read More Link */}
              <div className="flex items-center text-amber-600 hover:text-amber-700 transition-colors group cursor-pointer">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200 text-[#B38E70]" />
                <span className="text-black text-sm md:text-base">Read More</span>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 overflow-hidden w-full lg:w-[300px] min-h-[200px] md:min-h-[250px] lg:min-h-[300px]">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 md:top-6 lg:top-8 left-4 md:left-6 lg:left-8 text-amber-300 text-4xl md:text-6xl lg:text-8xl font-serif transform rotate-12">
                  ✎
                </div>
                <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 right-8 md:right-12 lg:right-16 text-amber-300 text-3xl md:text-4xl lg:text-6xl font-serif transform -rotate-12">
                  ✐
                </div>
              </div>

              {/* Handwritten Text Background */}
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
                <div className="w-48 md:w-56 lg:w-64 h-60 md:h-64 lg:h-80 bg-gradient-to-b from-amber-50 to-amber-100 rounded-lg shadow-lg p-3 md:p-4 lg:p-6 transform rotate-3">
                  <div className="space-y-2 md:space-y-3 opacity-40">
                    <div className="h-1.5 md:h-2 bg-amber-400 rounded w-3/4"></div>
                    <div className="h-1.5 md:h-2 bg-amber-400 rounded w-full"></div>
                    <div className="h-1.5 md:h-2 bg-amber-400 rounded w-2/3"></div>
                    <div className="h-1.5 md:h-2 bg-amber-400 rounded w-4/5"></div>
                    <div className="h-1.5 md:h-2 bg-amber-400 rounded w-1/2"></div>
                    <div className="h-1.5 md:h-2 bg-amber-400 rounded w-5/6"></div>
                    <div className="h-1.5 md:h-2 bg-amber-400 rounded w-2/3"></div>
                    <div className="h-1.5 md:h-2 bg-amber-400 rounded w-full"></div>
                    <div className="h-1.5 md:h-2 bg-amber-400 rounded w-3/4"></div>
                    <div className="h-1.5 md:h-2 bg-amber-400 rounded w-1/2"></div>
                    <div className="h-1.5 md:h-2 bg-amber-400 rounded w-4/5"></div>
                    <div className="h-1.5 md:h-2 bg-amber-400 rounded w-2/3"></div>
                  </div>
                </div>
              </div>

              {/* Hand with Fountain Pen */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  {/* Hand */}
                  <div className="w-20 h-12 md:w-24 md:h-16 lg:w-32 lg:h-20 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full transform rotate-12 shadow-lg">
                    {/* Fingers */}
                    <div className="absolute top-1 md:top-2 left-4 md:left-6 lg:left-8 w-8 h-2 md:w-10 md:h-2.5 lg:w-12 lg:h-3 bg-gradient-to-r from-amber-300 to-amber-400 rounded-full transform rotate-45"></div>
                    <div className="absolute top-2 md:top-3 lg:top-4 left-5 md:left-7 lg:left-10 w-6 h-1.5 md:w-8 md:h-2 lg:w-10 lg:h-2 bg-gradient-to-r from-amber-300 to-amber-400 rounded-full transform rotate-45"></div>
                  </div>

                  {/* Fountain Pen */}
                  <div className="absolute top-1 md:top-2 left-4 md:left-6 lg:left-8 transform rotate-45">
                    {/* Pen body */}
                    <div className="w-12 h-1.5 md:w-16 md:h-2 lg:w-20 lg:h-2 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-full shadow-md"></div>
                    {/* Pen tip */}
                    <div className="absolute -left-0.5 md:-left-1 top-0.5 w-1 h-0.5 md:w-1.5 md:h-0.5 lg:w-2 lg:h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                    {/* Pen clip */}
                    <div className="absolute right-1 md:right-1.5 lg:right-2 -top-0.5 md:-top-1 w-0.5 h-2 md:h-3 lg:h-4 bg-gray-500 rounded-full"></div>
                  </div>

                  {/* Ink drops */}
                  <div className="absolute top-4 md:top-6 lg:top-8 left-6 md:left-8 lg:left-12 w-0.5 h-0.5 md:w-1 md:h-1 lg:w-1 lg:h-1 bg-blue-800 rounded-full opacity-60"></div>
                  <div className="absolute top-5 md:top-7 lg:top-10 left-7 md:left-9 lg:left-14 w-0.25 h-0.25 md:w-0.5 md:h-0.5 lg:w-0.5 lg:h-0.5 bg-blue-800 rounded-full opacity-40"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-8 md:top-12 lg:top-16 right-8 md:right-12 lg:right-16 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-white/60 rounded-full shadow-lg animate-pulse"></div>
              <div className="absolute bottom-10 md:bottom-12 lg:bottom-20 left-6 md:left-8 lg:left-12 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 bg-white/40 rounded-full shadow-lg animate-pulse delay-300"></div>
              <div className="absolute top-16 md:top-20 lg:top-32 left-10 md:left-12 lg:left-20 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-white/50 rounded-full shadow-lg animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}