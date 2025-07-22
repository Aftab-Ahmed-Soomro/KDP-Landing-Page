// Navigation Configuration
export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#" },
  { name: "About us", href: "#" },
  { name: "Book Publishing", href: "#", hasDropdown: true },
  { name: "Book Marketing", href: "#" },
  { name: "Children Books Publishing", href: "#", hiddenOnMobile: true },
  { name: "More Services", href: "#", hasDropdown: true },
];

// Footer Links
export const FOOTER_QUICK_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact Us', href: '#' }
];

export const FOOTER_SERVICES = [
  { name: 'Ghost Writing', href: '#' },
  { name: 'Book Editing', href: '#' },
  { name: 'Book Formatting', href: '#' },
  { name: 'Book Cover Design', href: '#' },
  { name: 'Book Marketing', href: '#' }
];

export const PAYMENT_METHODS = [
  { name: 'VISA', color: 'text-blue-600' },
  { name: 'mastercard', color: 'text-gray-800' },
  { name: 'AMERICAN EXPRESS', color: 'text-blue-600' },
  { name: 'DISCOVER', color: 'text-orange-500' }
];

// Contact Information
export const CONTACT_INFO = {
  phone: "+1 (213) 982-0852",
  email: "info@kdppropublishers.com",
  address: "USC Tower 1150 S Olive St Los Angeles, CA 90015"
};

// Company Information
export const COMPANY_INFO = {
  name: "KDP PRO Publishers",
  description: "We offer all-inclusive services to cater to author needs with a 360-degree approach. Our motto is to ensure a stress-free ground for authors. With our all-in-one solution, you can just overhaul the process and leave the rest to us.",
  logo: {
    white: "https://kdppropublishers.com/images/logowhite.png",
    colored: "/Assets/imgs/logo.png"
  }
};

// Hero Section Content
export const HERO_CONTENT = {
  subtitle: "Transform Your Vision into Reality with KDP Pro Publishers",
  title: "Welcome to KDP PRO PUBLISHERS, your one-stop solution for all your book publishing needs.",
  description: "Whether you're looking to publish a children's book, a novel, or an audiobook, we provide comprehensive services to bring your manuscript to life. Explore our wide range of offerings and let us help you share your story with the world.",
  backgroundImage: "/Assets/imgs/home-about-01.png"
};

// About Section Content
export const ABOUT_CONTENT = {
  title: "KDP Pro Publishers are poised to make your publishing step unprecedentedly smooth",
  description: "It's time to showcase your extraordinary success story that defied all odds! Hire a publisher now to publish your voice and share your narrative with the world. Our commitment to incorporating your feedback ensures a collaborative process that results in manuscripts poised to influence bibliophiles, leaving them anticipating more literary gems from your pen. Besides that, we adeptly finalize your manuscripts, giving careful consideration to your concepts. Along every step of the publishing journey, we stand alongside you, approaching your project with the same dedication as if it were our own.",
  additionalInfo: "Our focus remains on understanding your vision for the book, ensuring that your desires and expectations are at the forefront of the publishing process.",
  image: "https://kdppropublishers.com/images/home-about-01.png"
};

// Button Variants
export const BUTTON_VARIANTS = {
  primary: "bg-[#F3BD07] text-white hover:bg-[#e6b006]",
  secondary: "bg-[#434748] text-white hover:bg-[#2a2d2e]",
  outline: "bg-transparent border border-black text-black hover:bg-black hover:text-white",
  outlineWhite: "bg-transparent border border-white text-white hover:bg-white hover:text-black",
  gray: "bg-gray-700 hover:bg-gray-600 text-white",
  transparent: "bg-transparent hover:bg-gray-700 text-white border border-gray-500 hover:border-gray-400"
};

// Color Palette
export const COLORS = {
  primary: "#F3BD07",
  secondary: "#434748",
  accent: "#6F5806",
  dark: "#2a2d2e",
  light: "#e6b006"
};

// Breakpoints
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
}; 