import React from "react";

const HeroSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div>
      <div
        className="relative grid grid-cols-1 lg:grid-cols-2 px-4 md:px-8 lg:px-12 pt-8 md:pt-12 lg:pt-20 flex items-center justify-center min-h-screen"
        style={{
          backgroundImage: "url('/Assets/imgs/adventure-writing-banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-2 md:gap-4 text-white order-2 lg:order-1">
          <p className="text-sm md:text-base lg:text-lg">
            Transform Your Vision into Reality with KDP Pro Publishers
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed">
            Welcome to KDP PRO PUBLISHERS, your one-stop solution for all your
            book publishing needs.
          </h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            Whether you're looking to publish a children's book, a novel, or an
            audiobook, we provide comprehensive services to bring your
            manuscript to life. Explore our wide range of offerings and let us
            help you share your story with the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 md:mt-6">
            <button className="bg-[#434748] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-md text-sm md:text-base hover:bg-[#2a2d2e] transition-colors">
              Lets Get Started
            </button>
            <button className="bg-transparent border border-white text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-md text-sm md:text-base hover:bg-white hover:text-black transition-colors">
              +1 (213) 982-0852
            </button>
          </div>
        </div>

        <div className="p-4 mb-28 md:p-6 lg:p-8 flex items-center justify-center order-1 lg:order-2">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-yellow-300 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-24 md:w-36 lg:w-48 h-24 md:h-36 lg:h-48 bg-orange-300 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-12 md:w-16 lg:w-24 h-12 md:h-16 lg:h-24 bg-amber-200 rounded-full opacity-30 blur-lg"></div>
          </div>

          {/* Contact Form */}
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </div>
      <div className="absolute z-10 top-216 left-3 bg-[#434748] px-12 py-6 flex items-center justify-center gap-12 rounded-r-full rounded-l-full">
        <img
          className="w-[100px] h-[35px] object-contain"
          src="/Assets/imgs/google1.png"
          alt=""
        />
        <img
          className="w-[100px] h-[35px] object-contain"
          src="/Assets/imgs/amazon.png"
          alt=""
        />
        <img
          className="w-[100px] h-[35px] object-contain"
          src="/Assets/imgs/scribd1.png"
          alt=""
        />
        <img
          className="w-[100px] h-[35px] object-contain"
          src="/Assets/imgs/ibook1.png"
          alt=""
        />
        <img
          className="w-[100px] h-[35px] object-contain"
          src="/Assets/imgs/barnes-nobles.png"
          alt=""
        />
        <img
          className="w-[100px] h-[35px] object-contain"
          src="/Assets/imgs/hachette.png"
          alt=""
        />
        <img
          className="w-[100px] h-[35px] object-contain"
          src="/Assets/imgs/kobo1.png"
          alt=""
        />
        <img
          className="w-[100px] h-[35px] object-contain"
          src="/Assets/imgs/ingram.png"
          alt=""
        />
      </div>
    </div>
  );
};

const ContactForm = ({ onSubmit }) => {
  return (
    <div className="relative bg-gray-100 rounded-2xl shadow-2xl p-4 md:p-6 w-full max-w-sm md:max-w-md">
      <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
        <FormInput type="text" name="name" placeholder="Your Name" required />
        <FormInput
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <FormInput
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
        />
        <FormTextarea
          name="project"
          placeholder="Talk About Your Project"
          rows="3"
          required
        />
        <TermsCheckbox />
        <SubmitButton />
      </form>
    </div>
  );
};

const FormInput = ({ type, name, placeholder, required }) => (
  <div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full px-0 py-2 md:py-3 text-gray-700 placeholder-black bg-transparent border-0 border-b-2 border-gray-300 focus:border-amber-500 focus:outline-none focus:ring-0 text-sm"
      required={required}
    />
  </div>
);

const FormTextarea = ({ name, placeholder, rows, required }) => (
  <div>
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-0 py-2 md:py-3 text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-amber-500 focus:outline-none focus:ring-0 text-sm resize-none"
      required={required}
    />
  </div>
);

const TermsCheckbox = () => (
  <div className="space-y-3">
    <div className="flex items-start space-x-2">
      <input
        type="checkbox"
        name="agreedToTerms"
        className="mt-1 w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 focus:ring-2"
        required
      />
      <label className="text-xs text-gray-600 leading-relaxed">
        Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL (
        <span className="text-amber-600 font-semibold">PRIVACY POLICY</span> &
        <span className="text-amber-600 font-semibold"> TERM & CONDITIONS</span>
        ) - Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to STOP
        to unsubscribe anytime.
      </label>
    </div>
  </div>
);

const SubmitButton = () => (
  <button
    type="submit"
    className="bg-[#F3BC07] text-lg md:text-xl py-3 md:py-4 lg:py-5 px-6 md:px-8 lg:px-10 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-amber-300"
  >
    Submit
  </button>
);

export default HeroSection;
