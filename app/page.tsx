'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'categories', 'work', 'about', 'videos', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 border-2 border-accent-gold/50">
              <Image src="/images/icon.jpg" alt="Icon Photography Logo" width={48} height={48} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-display font-bold text-xl tracking-tight">ICON</div>
              <div className="text-xs text-accent-gold tracking-widest">PHOTOGRAPHY</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Categories', 'Work', 'About', 'Videos', 'Contact'].map((item) => {
              const id = item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`font-body text-sm tracking-wide uppercase transition-colors duration-300 relative group ${
                    activeSection === id ? 'text-accent-gold' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-gold transition-all duration-300 ${
                    activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-accent-gold to-accent-amber text-black font-body font-semibold rounded-full hover:scale-105 transition-transform duration-300"
          >
            BOOK NOW
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 via-black to-accent-magenta/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Tagline */}
            <div className="animate-fade-in">
              <p className="text-accent-gold font-body text-lg md:text-xl tracking-widest uppercase mb-4" style={{ wordSpacing: '0.5em' }}>
                Capturing Stories
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-none animate-slide-up" style={{ animationDelay: '0.2s' }}>
              YOUR MOMENTS,
              <br />
              <span className="gradient-text">OUR ART</span>
            </h1>

            {/* Subheading */}
            <p className="font-body text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Professional photography that transforms fleeting moments into timeless memories
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="#categories"
                className="px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-amber text-black font-body font-bold text-lg rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-accent-gold/50 transition-all duration-300"
              >
                EXPLORE GALLERY
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-accent-gold text-accent-gold font-body font-bold text-lg rounded-full hover:bg-accent-gold hover:text-black transition-all duration-300"
              >
                GET IN TOUCH
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="inline-flex flex-col items-center gap-2 animate-bounce">
                <div className="w-6 h-10 border-2 border-accent-gold rounded-full flex items-start justify-center p-2">
                  <div className="w-1.5 h-3 bg-accent-gold rounded-full animate-pulse" />
                </div>
                <p className="text-accent-gold text-xs tracking-wider">SCROLL</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-accent-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Our Expertise
            </p>
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-6">
              What We <span className="gradient-text">Capture</span>
            </h2>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              From weddings to fashion, we specialize in creating stunning visual stories
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Weddings', icon: '💍', color: 'from-accent-crimson to-accent-magenta', desc: 'Capturing your special day with elegance and emotion' },
              { name: 'Pre-Weddings', icon: '💑', color: 'from-accent-magenta to-primary-blue', desc: 'Romantic moments before the big day' },
              { name: 'Fashion', icon: '👗', color: 'from-accent-gold to-accent-amber', desc: 'Bold and creative fashion photography' },
              { name: 'Traditional', icon: '🎭', color: 'from-primary-cyan to-primary-blue', desc: 'Celebrating culture and traditions' },
              { name: 'Family', icon: '👨‍👩‍👧‍👦', color: 'from-accent-amber to-accent-crimson', desc: 'Precious family moments preserved forever' },
              { name: 'Portraits', icon: '📸', color: 'from-primary-blue to-accent-gold', desc: 'Professional portraits that tell your story' },
            ].map((category, index) => (
              <div
                key={category.name}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    {category.icon}
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-2 group-hover:text-accent-gold transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-white/60 font-body">
                    {category.desc}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <div className="w-8 h-8 rounded-full bg-accent-gold flex items-center justify-center">
                    <span className="text-black text-xl">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Gallery Section */}
      <section id="work" className="py-24 bg-gradient-to-b from-black via-primary-blue/5 to-black">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-accent-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-6">
              Our <span className="gradient-text">Work</span>
            </h2>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              A glimpse into the moments we've captured
            </p>
          </div>

          {/* Gallery Grid - Masonry Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: '/images/iconphotography_ns_1683306353_3096120558098540379_48206676147.webp', category: 'Fashion', height: 'h-96' },
              { src: '/images/iconphotography_ns_1687523230_3131494287249452312_48206676147.webp', category: 'Traditional', height: 'h-80' },
              { src: '/images/iconphotography_ns_1713630284_3350496123191766966_48206676147.webp', category: 'Wedding', height: 'h-72' },
              { src: '/images/iconphotography_ns_1722496198_3424868803436622915_48206676147.webp', category: 'Portrait', height: 'h-80' },
              { src: '/images/iconphotography_ns_1727798810_3469350331992674741_48206676147.webp', category: 'Traditional', height: 'h-96' },
              { src: '/images/iconphotography_ns_1731310969_3498812464350115949_48206676147.webp', category: 'Family', height: 'h-72' },
              { src: '/images/iconphotography_ns_1733819797_3519858033118034651_48206676147.webp', category: 'Wedding', height: 'h-80' },
              { src: '/images/iconphotography_ns_1734759920_3527744356755506325_48206676147.webp', category: 'Family', height: 'h-96' },
              { src: '/images/iconphotography_ns_1760388562_3742732990964528118_48206676147.webp', category: 'Wedding B&W', height: 'h-72' },
              { src: '/images/iconphotography_ns_1760854785_3746643953564249396_48206676147.webp', category: 'Traditional Dance', height: 'h-96' },
              { src: '/images/iconphotography_ns_1768471524_3810537793990973448_48206676147.webp', category: 'Traditional Dance', height: 'h-80' },
              { src: '/images/chandana_psycho_official_1742991620_3596796862990409161_52046389751.jpg', category: 'Fashion', height: 'h-72' },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative ${item.height} rounded-2xl overflow-hidden cursor-pointer`}
              >
                <Image
                  src={item.src}
                  alt={`${item.category} Photography`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-4">
                  <span className="text-white font-body text-sm tracking-widest uppercase bg-black/60 px-3 py-1 rounded-full border border-accent-gold/50">
                    {item.category}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-accent-gold/30">
                  <p className="text-accent-gold text-xs font-body tracking-wider">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 border-2 border-accent-gold text-accent-gold font-body font-bold rounded-full hover:bg-accent-gold hover:text-black transition-all duration-300">
              VIEW MORE WORK
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-accent-gold via-accent-amber to-accent-gold">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '1000+', label: 'Events Covered' },
              { number: '5+', label: 'Years Experience' },
              { number: '50K+', label: 'Photos Captured' },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-display font-black text-4xl md:text-6xl text-black">
                  {stat.number}
                </h3>
                <p className="font-body text-black/80 text-sm md:text-base tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/iconphotography_ns_1760854785_3746643953564249396_48206676147.webp"
                  alt="Icon Photography Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent-gold/20 rounded-full blur-3xl" />
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <p className="text-accent-gold font-body text-sm tracking-[0.3em] uppercase">
                About Us
              </p>
              <h2 className="font-display font-bold text-5xl md:text-6xl leading-tight">
                Capturing <span className="gradient-text">Stories</span> That Last Forever
              </h2>
              <div className="space-y-4 text-white/80 font-body text-lg leading-relaxed">
                <p>
                  At Icon Photography, we believe every moment tells a story. Our passion is to freeze those fleeting seconds into timeless memories that you'll cherish forever.
                </p>
                <p>
                  With years of experience in wedding, fashion, and portrait photography, we bring a unique blend of creativity, technical expertise, and emotional intelligence to every shoot.
                </p>
                <p>
                  From the vibrant colors of traditional ceremonies to the intimate moments of family gatherings, we capture the essence of your most precious memories.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-amber text-black font-body font-bold rounded-full hover:scale-105 transition-transform duration-300 mt-6"
              >
                WORK WITH US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-24 bg-gradient-to-b from-black via-accent-magenta/5 to-black">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-accent-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Motion Stories
            </p>
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-6">
              Featured <span className="gradient-text">Videos</span>
            </h2>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              Cinematic moments from our latest shoots
            </p>
          </div>

          {/* Video Grid — 2×2 YouTube embeds */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Wedding Film', id: 'qckNPJLI-r0' },
              { title: 'Pre-Wedding Story', id: 'W1BQv21yeus' },
              { title: 'Traditional Ceremony', id: 'ljrCb4pzh-0' },
              { title: 'Special Moments', id: 'IGPjCdKzuYQ' },
            ].map((video) => (
              <div key={video.id} className="rounded-2xl overflow-hidden border border-white/10 bg-black">
                <div className="relative w-full aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="px-4 py-3 border-t border-white/10">
                  <p className="text-white/80 font-body text-sm">{video.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="https://instagram.com/iconphotography.ns"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-accent-gold text-accent-gold font-body font-bold rounded-full hover:bg-accent-gold hover:text-black transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              FOLLOW ON INSTAGRAM
            </a>
            <a
              href="https://www.youtube.com/@iconphotography.NS2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-red-500 text-red-500 font-body font-bold rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              SUBSCRIBE ON YOUTUBE
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 via-transparent to-accent-magenta/10" />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-accent-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-6">
              Let's Create <span className="gradient-text">Magic</span> Together
            </h2>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              Ready to capture your special moments? Reach out and let's discuss your vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-body text-white/70 mb-2 tracking-wider uppercase">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-accent-gold focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-body text-white/70 mb-2 tracking-wider uppercase">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-accent-gold focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-body text-white/70 mb-2 tracking-wider uppercase">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX (Your phone)"
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-accent-gold focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-body text-white/70 mb-2 tracking-wider uppercase">Event Type</label>
                <select className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-accent-gold focus:outline-none transition-colors duration-300">
                  <option>Select Event Type</option>
                  <option>Wedding</option>
                  <option>Pre-Wedding</option>
                  <option>Fashion Shoot</option>
                  <option>Traditional Event</option>
                  <option>Family Portrait</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-body text-white/70 mb-2 tracking-wider uppercase">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your event..."
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-accent-gold focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>
              <button className="w-full px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-amber text-black font-body font-bold text-lg rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-accent-gold/50 transition-all duration-300">
                SEND MESSAGE
              </button>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="font-display font-bold text-2xl mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-gold text-xl">📧</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-body mb-1">Email</p>
                      <p className="text-white font-body">iconphotography.ns@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-gold text-xl">📱</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-body mb-1">Phone</p>
                      <p className="text-white font-body">+91 83675 05677</p>
                      <p className="text-white font-body">+91 83094 18212</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-gold text-xl">📍</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-body mb-1">Location</p>
                      <p className="text-white font-body">Hyderabad, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-gold text-xl">📷</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-body mb-1">Instagram</p>
                      <a
                        href="https://instagram.com/iconphotography.ns"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-gold font-body hover:underline"
                      >
                        @iconphotography.ns
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="font-display font-bold text-2xl mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com/iconphotography.ns"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    className="group w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center hover:from-purple-500 hover:to-pink-500 hover:border-transparent hover:scale-110 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-pink-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@iconphotography.NS2"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="YouTube"
                    className="group w-14 h-14 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center hover:bg-red-600 hover:border-transparent hover:scale-110 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-gold/50">
                  <Image src="/images/icon.jpg" alt="Icon Photography Logo" width={48} height={48} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl">ICON</div>
                  <div className="text-xs text-accent-gold tracking-widest">PHOTOGRAPHY</div>
                </div>
              </div>
              <p className="text-white/60 font-body text-sm">
                Capturing life's precious moments with artistry and passion
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Categories', 'Work', 'About', 'Videos', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-white/60 hover:text-accent-gold transition-colors duration-300 font-body text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Services</h4>
              <div className="space-y-2">
                {['Wedding Photography', 'Pre-Wedding Shoots', 'Fashion Photography', 'Traditional Events', 'Family Portraits', 'Commercial Photography'].map((service) => (
                  <p key={service} className="text-white/60 font-body text-sm">
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 font-body text-sm">
              © 2026 Icon Photography. All rights reserved. | Built with passion
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
