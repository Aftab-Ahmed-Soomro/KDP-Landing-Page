import React from 'react';
import Container from './common/Container';
import Button from './common/Button';
import Grid from './common/Grid';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' }
  ];

  const services = [
    { name: 'Ghost Writing', href: '#' },
    { name: 'Book Editing', href: '#' },
    { name: 'Book Formatting', href: '#' },
    { name: 'Book Cover Design', href: '#' },
    { name: 'Book Marketing', href: '#' }
  ];

  return (
    <div>
      <footer className="bg-black text-white py-12 px-20 pt-24">
        <Container maxWidth="7xl" padding={false}>
          {/* Top CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="gray" size="lg" className="min-w-48">
              Let's Get Started
            </Button>
            <Button variant="transparent" size="lg" className="min-w-48">
              +1 (213) 982-0852
            </Button>
          </div>

          {/* Main Footer Content */}
          <Grid cols={4} gap="lg">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <CompanyInfo />
            </div>

            {/* Quick Links */}
            <FooterLinks title="Quick Links" links={quickLinks} />

            {/* Services */}
            <FooterLinks title="Services" links={services} />
          </Grid>
        </Container>
      </footer>
      
      {/* Copyright Section */}
      <CopyrightSection />
    </div>
  );
};

const CompanyInfo = () => (
  <>
    <div className="flex items-center mb-6">
      <div>
        <img 
          className='w-[320px] h-[110px]' 
          src="https://kdppropublishers.com/images/logowhite.png" 
          alt="KDP Pro Publishers Logo" 
        />
      </div>
    </div>

    <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
      We offer all-inclusive services to cater to author needs with a 360-degree approach. Our motto is to ensure a stress-free ground for authors. With our all-in-one solution, you can just overhaul the process and leave the rest to us.
    </p>
    <img src="/Assets/imgs/payment-logo.png" alt="" />
  </>
);

const FooterLinks = ({ title, links }) => (
  <div>
    <h4 className="text-lg font-semibold mb-6">{title}</h4>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a 
            href={link.href} 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const CopyrightSection = () => (
  <div className='bg-[#8D741A] flex justify-between items-center px-20 py-5'>
    <h1 className='text-white'>© Copyright 2025 | KDP Pro Publishers | All right reserved.</h1>
    <div className='flex gap-4'>
      <a href="#" className='text-white hover:text-gray-200 transition-colors'>Terms & Conditions</a>
      <a href="#" className='text-white hover:text-gray-200 transition-colors'>Privacy Policy</a>
    </div>
  </div>
);

export default Footer;