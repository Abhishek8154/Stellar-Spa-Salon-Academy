import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, MapPin, Phone, Mail, Instagram, Facebook, Twitter, 
  Scissors, Sparkles, Droplets, Flower2, Star, Award, BookOpen, 
  Clock, CheckCircle2, ChevronRight, MessageCircle
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Academy', href: '#academy' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-2xl font-bold text-spa-dark">
              Stellar <span className="text-spa-gold">Spa</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-spa-gold',
                  scrolled ? 'text-spa-dark' : 'text-white/90 hover:text-white'
                )}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-spa-gold hover:bg-spa-gold-dark text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                scrolled ? "text-spa-dark" : "text-white"
              )}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-spa-dark hover:bg-spa-beige rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-spa-gold text-white px-6 py-3 rounded-md font-medium"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
          alt="Relaxing Spa Environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block text-spa-gold font-medium tracking-widest uppercase mb-4 text-sm md:text-base"
        >
          Welcome to Luxury
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight"
        >
          Stellar Spa Salon <br/>& Academy
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto"
        >
          Premium Spa, Salon Services & Professional Beauty Training in Andheri East, Mumbai
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-spa-gold hover:bg-spa-gold-dark text-white rounded-full font-medium transition-colors text-center"
          >
            Book Appointment
          </a>
          <a 
            href="#academy" 
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full font-medium transition-colors text-center"
          >
            Explore Courses
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-spa-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop" 
                alt="Spa Treatment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-spa-green rounded-full flex items-center justify-center text-spa-green-dark">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl">Certified</h4>
                  <p className="text-sm text-gray-500">Professionals</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">Delivering excellence in beauty and wellness education.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-spa-gold font-medium tracking-wider uppercase text-sm">About Us</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif text-spa-dark mb-6">
              Your Sanctuary for Beauty & Wellness
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Stellar Spa Salon & Academy is a trusted destination offering luxury spa services, professional salon treatments, and certified beauty training courses. Located in the heart of Andheri East, Mumbai, we blend modern techniques with timeless relaxation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you're looking to rejuvenate your senses with our signature therapies, transform your look with our expert stylists, or build a rewarding career in the beauty industry through our comprehensive academy, Stellar is committed to excellence in every experience.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-spa-gold shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Premium Salon Services</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-spa-gold shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Luxury Spa Treatments</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-spa-gold shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Professional Certification</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-spa-gold shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Expert Trainers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Scissors />, title: 'Haircut & Styling', desc: 'Precision cuts and modern styling tailored to your face shape and lifestyle.' },
    { icon: <Sparkles />, title: 'Hair Spa & Treatments', desc: 'Deep conditioning and restorative treatments for healthy, glowing hair.' },
    { icon: <Droplets />, title: 'Hair Coloring', desc: 'From subtle highlights to bold transformations using premium products.' },
    { icon: <Flower2 />, title: 'Facial & Skin', desc: 'Rejuvenating facials customized for your unique skin type and concerns.' },
    { icon: <Star />, title: 'Body Spa & Therapy', desc: 'Relaxing massages and body treatments to melt away stress.' },
    { icon: <CheckCircle2 />, title: 'Manicure & Pedicure', desc: 'Complete nail care and pampering for your hands and feet.' },
    { icon: <Sparkles />, title: 'Waxing & Threading', desc: 'Gentle and precise hair removal services for smooth skin.' },
    { icon: <Award />, title: 'Bridal Makeup', desc: 'Flawless, long-lasting makeup for your special day.' },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-spa-gold font-medium tracking-wider uppercase text-sm">Our Services</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif text-spa-dark mb-4">
            Luxury Salon & Spa Treatments
          </h2>
          <p className="text-gray-600 text-lg">
            Experience the pinnacle of relaxation and beauty with our comprehensive range of premium services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-spa-beige p-8 rounded-2xl hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-spa-gold mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-spa-dark">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Academy = () => {
  const courses = [
    { title: 'Professional Hair Styling', duration: '3 Months', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop' },
    { title: 'Makeup Artist Course', duration: '2 Months', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop' },
    { title: 'Advanced Skin & Facial', duration: '6 Weeks', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Nail Art & Extension', duration: '4 Weeks', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=2069&auto=format&fit=crop' },
    { title: 'Spa Therapy Training', duration: '2 Months', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Complete Beauty Parlour', duration: '6 Months', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop' },
  ];

  return (
    <section id="academy" className="py-24 bg-spa-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-spa-green-dark font-medium tracking-wider uppercase text-sm">Stellar Academy</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif text-spa-dark mb-4">
              Build Your Career in Beauty
            </h2>
            <p className="text-gray-700 text-lg">
              Join our certified training programs and learn from industry experts. Get hands-on experience and professional certification.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-spa-green-dark font-medium hover:text-spa-dark transition-colors">
            View All Courses <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-spa-dark flex items-center gap-1">
                  <Clock size={14} /> {course.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium mb-2 text-spa-dark group-hover:text-spa-gold transition-colors">{course.title}</h3>
                <p className="text-gray-500 text-sm mb-4">Comprehensive training covering latest techniques and industry standards.</p>
                <a href="#contact" className="text-spa-gold font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Enroll Now <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: 'Experienced Trainers', desc: 'Learn from industry veterans with years of practical experience.' },
    { title: 'Professional Certifications', desc: 'Get recognized certificates upon successful course completion.' },
    { title: 'Luxury Spa Environment', desc: 'Train and relax in a premium, calming atmosphere.' },
    { title: 'Modern Equipment', desc: 'Access to the latest beauty tools and technologies.' },
    { title: 'Hands-On Training', desc: 'Practical sessions on live models for real-world experience.' },
    { title: 'Affordable Fees', desc: 'Quality education and services at competitive prices.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-spa-dark mb-4">
            Why Choose Stellar?
          </h2>
          <p className="text-gray-600 text-lg">
            We are committed to providing the highest quality of service and education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="shrink-0 w-12 h-12 bg-spa-beige rounded-full flex items-center justify-center text-spa-gold">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-lg font-serif font-medium mb-2 text-spa-dark">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1521590832167-7bfc17484d20?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=2011&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop',
  ];

  return (
    <section id="gallery" className="py-24 bg-spa-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-spa-gold font-medium tracking-wider uppercase text-sm">Our Gallery</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif mb-4">
            A Glimpse of Stellar
          </h2>
          <p className="text-gray-400 text-lg">
            Explore our luxurious interiors, stunning transformations, and vibrant training sessions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square overflow-hidden rounded-xl"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Priya Sharma', role: 'Spa Client', text: 'The most relaxing spa experience I have had in Mumbai. The therapists are highly skilled and the ambiance is pure luxury.' },
    { name: 'Neha Desai', role: 'Academy Student', text: 'Enrolling in the Makeup Artist course was the best decision. The hands-on training and expert guidance helped me start my own freelance career.' },
    { name: 'Anjali Verma', role: 'Bridal Client', text: 'They made me look absolutely stunning on my wedding day. The makeup was flawless and lasted all night. Highly recommend their bridal services!' },
  ];

  return (
    <section className="py-24 bg-spa-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-spa-dark mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm relative"
            >
              <div className="text-spa-gold mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-6">"{review.text}"</p>
              <div>
                <h4 className="font-serif font-medium text-spa-dark">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div>
            <span className="text-spa-gold font-medium tracking-wider uppercase text-sm">Get in Touch</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif text-spa-dark mb-8">
              Visit Our Sanctuary
            </h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-spa-beige rounded-full flex items-center justify-center text-spa-gold shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-spa-dark mb-1">Location</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Shop No. 2, Bhartiya Kala Mandal CHS OM Nagar,<br/>
                    C-2A, near J B Nagar, Kanti Nagar,<br/>
                    J B Nagar, Andheri East, Mumbai,<br/>
                    Maharashtra 400099, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-spa-beige rounded-full flex items-center justify-center text-spa-gold shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-spa-dark mb-1">Phone</h4>
                  <p className="text-gray-600 text-sm">+91 9769802773</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-spa-dark mb-1">WhatsApp</h4>
                  <a 
                    href="https://wa.me/919769802773" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 text-sm hover:text-[#25D366] transition-colors"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.970517855684!2d72.86591!3d19.10893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86b24017387%3A0x8e82a1768688417c!2sStellar%20Spa%20Salon%20%26%20Academy!5e0!3m2!1sen!2sin!4v1709650000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Stellar Spa Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-spa-beige p-8 md:p-10 rounded-3xl">
            <h3 className="text-2xl font-serif text-spa-dark mb-6">Book an Appointment or Inquire</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-spa-gold bg-white shadow-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-spa-gold bg-white shadow-sm"
                  placeholder="+91 00000 00000"
                />
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">Interested In</label>
                <select 
                  id="interest" 
                  className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-spa-gold bg-white shadow-sm text-gray-600"
                >
                  <option value="">Select Service / Course</option>
                  <optgroup label="Services">
                    <option value="spa">Spa Treatment</option>
                    <option value="salon">Salon Service</option>
                    <option value="bridal">Bridal Makeup</option>
                  </optgroup>
                  <optgroup label="Academy">
                    <option value="course-hair">Hair Styling Course</option>
                    <option value="course-makeup">Makeup Artist Course</option>
                    <option value="course-other">Other Course</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-spa-gold bg-white shadow-sm resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-spa-dark hover:bg-black text-white py-4 rounded-xl font-medium transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 bg-spa-gold relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="pattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 10L10 0ZM10 10L0 0Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </pattern>
          <rect width="100" height="100" fill="url(#pattern)" />
        </svg>
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
          Ready for a Transformation?
        </h2>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          Book a Spa Appointment or Enroll in a Beauty Course Today and step into a world of elegance and professionalism.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="px-8 py-4 bg-white text-spa-gold hover:bg-gray-50 rounded-full font-medium transition-colors">
            Book Appointment
          </a>
          <a href="https://wa.me/919769802773" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-white text-white hover:bg-white/10 rounded-full font-medium transition-colors flex items-center justify-center gap-2">
            <MessageCircle size={20} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-spa-dark pt-20 pb-10 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="font-serif text-2xl font-bold text-white mb-6 block">
              Stellar <span className="text-spa-gold">Spa</span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Premium Spa, Salon Services & Professional Beauty Training in Andheri East, Mumbai. Your sanctuary for beauty and wellness.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-spa-gold hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-spa-gold hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-spa-gold hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-spa-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-spa-gold transition-colors">Salon & Spa Services</a></li>
              <li><a href="#academy" className="hover:text-spa-gold transition-colors">Beauty Academy</a></li>
              <li><a href="#gallery" className="hover:text-spa-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-spa-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>Hair Styling & Spa</li>
              <li>Facial & Skin Treatments</li>
              <li>Body Spa Therapy</li>
              <li>Bridal Makeup</li>
              <li>Nail Art & Care</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-spa-gold mt-0.5" />
                <span>Shop No. 2, Bhartiya Kala Mandal CHS OM Nagar, C-2A, near J B Nagar, Andheri East, Mumbai 400099</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-spa-gold" />
                <span>+91 9769802773</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-spa-gold" />
                <span>info@stellarspa.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Stellar Spa Salon & Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-spa-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Academy />
        <Features />
        <Gallery />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
