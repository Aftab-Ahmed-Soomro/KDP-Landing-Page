import { Monitor, FileText, Users } from 'lucide-react';

export default function PublisherPerksSection() {
  const perks = [
    {
      icon: <Monitor className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />,
      title: "Uplift Your Publishing Process",
      description: "Benefit from expertise of our publishers, ensuring your story is told on platforms where you get maximum reads and can make your dream of published author see light of the day."
    },
    {
      icon: <FileText className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />,
      title: "Focus on Your Strengths",
      description: "Free yourself from the time-consuming process of publisher. A publisher allows you to concentrate on your strengths and passions while they expertly handles the intricacies of publishing."
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />,
      title: "Your Vision, Their Expertise",
      description: "Collaborate with a professional publishers who treats your project as their own. Experience the advantage of a supportive partner who values your vision, incorporates your input, and navigates the publishing journey with a shared commitment to excellence."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400 py-12 md:py-16 lg:pb-12 lg:pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 py-8 md:py-12 px-6 md:px-10 order-2 lg:order-1">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight">
                Perks of Hiring a Publisher
              </h1>
              <p className="text-base md:text-lg text-gray-800 mb-6 md:mb-8 leading-relaxed">
                Learn the invaluable benefits that come with hiring a publisher and witness your
                ideas reach out to audiences.
              </p>
            </div>

            {/* Perks List */}
            <div className="flex flex-col gap-4 md:gap-6">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start rounded-lg"
                >
                  <div className="mb-1 md:mb-2">
                    {perk.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <img className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-auto md:h-[400px] lg:h-[550px] mx-auto rounded-lg" src="/Assets/imgs/advantage-img-01.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}