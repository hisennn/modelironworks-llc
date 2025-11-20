'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import EmblaCarousel from '../components/EmblaCarousel'
import { Menu, X, Hammer, Home as HomeIcon, Wrench, Star, MapPin, Phone, Clock, ArrowRight, ChevronDown, Quote } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const galleryImages = [
    'escada.png', 'corrimao.png', 'peca0.png', 'detalhe.png', 
    'escada6.png', 'escada3.png', 'corrimao3.png', 'corrimao4.png',
    'corrimao5.png', 'corrimao6.png', 'corrimao7.png', 'corrimao8.png',
    'corrimao9.png', 'corrimao10.png', 'corrimao11.png', 'peca5.png',
    'corrimao13.png', 'corrimao14.png', 'peca7.png', 'corrimao16.png',
    'corrimao17.png', 'corrimao18.png', 'corrimao19.png', 'corrimao20.png',
    'corrimao21.png', 'corrimao22.png', 'corrimao23.png', 'corrimao24.png'
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-amber-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-white uppercase flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Hammer className="text-amber-500" size={32} strokeWidth={2.5} />
            Model<span className="text-amber-500">IronWorks</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-bold uppercase tracking-widest hover:text-amber-500 transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="bg-amber-500 text-black px-6 py-2 font-bold uppercase tracking-wider hover:bg-amber-400 transition-all skew-x-[-10deg] cursor-pointer">
              <span className="block skew-x-[10deg]">Get Quote</span>
            </button>
          </div>

          <button className="md:hidden text-white cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950 flex flex-col items-center justify-center gap-8 md:hidden animate-in fade-in duration-200">
          {['About', 'Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-2xl font-black uppercase tracking-tighter hover:text-amber-500 text-white cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/40 z-10" />
           {/* Abstract background shapes */}
           <div className="absolute top-0 right-0 w-2/3 h-full bg-zinc-900 skew-x-[-12deg] translate-x-1/3 opacity-50" />
           <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-amber-900/20 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-zinc-900 border border-zinc-800 px-4 py-2 mb-6">
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Serving Maryland & Surrounding Areas</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-8 uppercase">
              Custom <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-300">Metalwork</span> <br/>
              & Welding
            </h1>
            <p className="text-xl text-zinc-400 mb-10 max-w-lg border-l-4 border-amber-500 pl-6">
              With over 25 years of experience, we build durable and beautiful structures for residential and commercial projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo('gallery')} className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group cursor-pointer">
                View Our Work <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollTo('contact')} className="border border-zinc-700 text-white px-8 py-4 font-bold uppercase tracking-wider hover:border-amber-500 hover:text-amber-500 transition-colors cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
          <div className="hidden lg:block relative">
             {/* Decorative elements */}
             <div className="absolute -inset-4 border-2 border-amber-500/30 z-0 translate-x-4 translate-y-4" />
             <div className="relative z-10 bg-zinc-800 aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                {/* Placeholder for hero image if I had one, or just a pattern */}
                <div className="absolute inset-0 bg-[url('/img/info.jpg')] bg-cover bg-center opacity-80 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                    <div className="text-6xl font-black text-white mb-2">25+</div>
                    <div className="text-amber-500 font-bold uppercase tracking-widest">Years of Excellence</div>
                </div>
             </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-600">
          <ChevronDown />
        </div>
      </section>

      {/* Services Section - Dark Cards */}
      <section id="services" className="py-32 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-zinc-800 pb-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-4">Our Services</h2>
              <p className="text-zinc-500 max-w-md">Comprehensive metalwork services tailored to your specific needs.</p>
            </div>
            <Wrench className="text-zinc-800 hidden md:block" size={64} />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Hammer, title: "Staircases & Railings", desc: "Custom designed and built staircases and railings that combine safety with beautiful aesthetics." },
              { icon: HomeIcon, title: "Gates & Fences", desc: "Security and style come together in our custom gates and fences, designed to complement your property." },
              { icon: Wrench, title: "Custom Fabrication", desc: "From art pieces to functional structures, we create custom metal fabrications tailored to your requirements." }
            ].map((service, i) => (
              <div key={i} className="group bg-zinc-900 p-8 border border-zinc-800 hover:border-amber-500 transition-all duration-300 hover:-translate-y-2 cursor-default">
                <div className="bg-zinc-950 w-16 h-16 flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Split */}
      <section id="about" className="py-32 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-zinc-800 relative overflow-hidden">
               <Image src="/img/info.jpg" alt="About Us" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-amber-500 p-10 hidden md:block">
              <div className="text-4xl font-black text-black">100%</div>
              <div className="text-black font-bold uppercase">Satisfaction</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8">
              Built To <span className="text-amber-500">Last</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg">
              <p>
                Welcome to Model IronWorks. For over 25 years, I&apos;ve been dedicated to creating stunning metal fabrications that combine functionality with great design.
              </p>
              <p>
                My journey in metalworking began with a passion for transforming raw materials into beautiful, durable structures. Over the decades, I&apos;ve honed my skills in welding and custom metal fabrication.
              </p>
              <p>
                From elegant handrails and staircases to custom gates, every project receives my personal attention to detail and commitment to safety.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">25+</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Full Width */}
      <section id="gallery" className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
           <h2 className="text-4xl md:text-6xl font-black text-white uppercase">Our Work</h2>
           <div className="h-1 w-32 bg-amber-500 hidden md:block"></div>
        </div>
        <div className="border-y border-zinc-800 bg-zinc-900 py-12">
          <div className="max-w-[1800px] mx-auto px-6">
            <EmblaCarousel images={galleryImages} />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-32 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 text-zinc-800 opacity-20">
          <Quote size={400} />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="flex justify-center mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="text-amber-500 fill-amber-500" size={32} />)}
          </div>
          <blockquote className="text-3xl md:text-5xl font-bold text-white leading-tight mb-10">
            &quot;Fernando is a master. A magician. He took my idea and created a masterpiece of a railing. I am super super happy.&quot;
          </blockquote>
          <div className="text-xl text-zinc-400 font-medium">
            Emily McLanahan <span className="text-zinc-600 mx-2">•</span> December, 2024
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden grid lg:grid-cols-2">
            <div className="p-12 md:p-20 text-white">
              <h2 className="text-4xl font-black uppercase mb-8">Get In Touch</h2>
              <p className="text-zinc-400 text-lg mb-12">Ready to start your project? Contact us today for a consultation and quote.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="bg-zinc-800 p-4 rounded-full text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold uppercase text-sm text-zinc-500">Location</div>
                    <div className="text-xl font-bold">7300 Golden Ring Rd, Essex, MD 21221</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="bg-zinc-800 p-4 rounded-full text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-bold uppercase text-sm text-zinc-500">Phone</div>
                    <div className="text-xl font-bold">+1 (301) 547-5449</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="bg-zinc-800 p-4 rounded-full text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="font-bold uppercase text-sm text-zinc-500">Working Hours</div>
                    <div className="text-xl font-bold">Mon - Fri: 7AM - 5PM</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-950 min-h-[400px] relative border-l border-zinc-800">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.938138301855!2d-76.4791637!3d39.3303316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c5176c4c0a15%3A0xa2ba8e4705c19e79!2sModel%20Ironworks%20LLC!5e0!3m2!1sen!2sbr!4v1618533913133!5m2!1sen!2sbr"
                  className="absolute inset-0 w-full h-full grayscale opacity-70 hover:opacity-100 transition-opacity"
                  style={{ border: 0 }}
                  allowFullScreen={true} 
                  loading="lazy"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
             <Hammer className="text-amber-500" size={24} />
             <span className="text-xl font-black text-white uppercase">Model IronWorks</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {['About', 'Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-amber-500 transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          <p className="text-zinc-600 text-sm">© 2025 Model IronWorks LLC.</p>
        </div>
      </footer>
    </div>
  )
}
