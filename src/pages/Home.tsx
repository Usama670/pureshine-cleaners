import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Shield, Clock, BadgeDollarSign, Sparkles, Star } from 'lucide-react';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  const features = [
    {
      title: 'Professional & Reliable',
      desc: 'Our team is focused on punctual service, professional presentation, and consistent cleaning quality.',
      icon: <Shield className="text-[#1E88E5]" size={32} />
    },
    {
      title: 'Flexible Scheduling',
      desc: 'Choose one-time, weekly, biweekly, or custom scheduling options that fit your needs.',
      icon: <Clock className="text-[#1E88E5]" size={32} />
    },
    {
      title: 'Transparent Pricing',
      desc: 'Simple service options and clear quote requests with no unnecessary confusion.',
      icon: <BadgeDollarSign className="text-[#1E88E5]" size={32} />
    },
    {
      title: 'Detail-Focused Results',
      desc: 'We pay attention to the areas that matter most so every visit leaves your space noticeably cleaner.',
      icon: <Sparkles className="text-[#1E88E5]" size={32} />
    }
  ];

  const services = [
    { title: 'Standard House Cleaning', desc: 'Routine cleaning for kitchens, bathrooms, bedrooms, and living areas.', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400' },
    { title: 'Deep Cleaning', desc: 'A more thorough service for spaces that need extra attention and detail.', img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=400' },
    { title: 'Move-In / Out Cleaning', desc: 'Detailed cleaning to prepare a property for new occupants or final handover.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400' },
    { title: 'Office Cleaning', desc: 'Reliable service for offices, studios, and professional workspaces.', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=400' },
    { title: 'Apartment Cleaning', desc: 'Convenient cleaning solutions for apartments, rental units, and condos.', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400' },
    { title: 'Airbnb Turnover', desc: 'Fast and dependable cleaning for short-term rental properties between stays.', img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=400' },
  ];

  const testimonials = [
    { name: 'Sarah M.', text: 'Very professional, easy to schedule, and the results were excellent. My apartment looked spotless.', stars: 5 },
    { name: 'Jason T.', text: 'We used PureShine for move-out cleaning and the service was smooth from start to finish.', stars: 5 },
    { name: 'Amanda R.', text: 'Reliable weekly office cleaning with great attention to detail. Highly recommended.', stars: 5 },
  ];

  return (
    <Layout title="Professional Cleaning Services for Homes and Offices">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F5F7FA] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="right">
            <span className="inline-block bg-[#26C6DA]/10 text-[#1E88E5] font-bold text-sm tracking-widest uppercase px-4 py-1 rounded-full mb-6">
              Flexible Scheduling. Reliable Results.
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#263238] leading-tight mb-6 font-poppins">
              Professional Cleaning <br /> Services for <span className="text-[#1E88E5]">Homes and Offices</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              PureShine Cleaners delivers reliable, detail-focused cleaning for homes, apartments, offices, and rental properties — with flexible scheduling and stress-free booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-a-quote" className="bg-[#1E88E5] text-white px-8 py-4 rounded-full font-bold text-center hover:bg-[#26C6DA] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Get a Free Quote <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="bg-white text-[#263238] border-2 border-gray-100 px-8 py-4 rounded-full font-bold text-center hover:border-[#1E88E5] transition-all">
                View Services
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['Trusted Local Service', 'Flexible Scheduling', 'Affordable Pricing', 'Satisfaction Focused'].map((point) => (
                <div key={point} className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <CheckCircle2 size={16} className="text-[#26C6DA]" />
                  {point}
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1600"
                alt="Clean Home"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#26C6DA] rounded-full -z-0 opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1E88E5] rounded-full -z-0 opacity-20 blur-xl"></div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#263238] mb-4">Why Clients Choose PureShine Cleaners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make it easy to keep your home or workspace fresh, clean, and professionally maintained.
            </p>
          </AnimatedSection>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="p-8 rounded-2xl bg-[#F5F7FA] hover:bg-white hover:shadow-xl transition-all duration-300 group h-full border border-transparent hover:border-[#26C6DA]/20">
                <div className="mb-6 p-3 bg-white inline-block rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#263238] mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <AnimatedSection direction="right" className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#263238] mb-4 text-center md:text-left">Our Cleaning Services</h2>
            <p className="text-gray-600 text-center md:text-left">
              From regular home cleaning to detailed move-out support, we offer practical cleaning solutions for residential and commercial spaces.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="left">
            <Link to="/services" className="text-[#1E88E5] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Explore All Services <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-semibold">Book Now</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#263238] mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#263238] mb-4">What Clients Say</h2>
          </AnimatedSection>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} className="bg-[#F5F7FA] p-8 rounded-2xl relative">
              <div className="flex gap-1 mb-4 text-orange-400">
                {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="italic text-gray-700 mb-6 relative z-10">"{t.text}"</p>
              <div className="font-bold text-[#263238]">— {t.name}</div>
              <div className="absolute top-4 right-8 text-8xl text-[#1E88E5]/5 font-serif select-none">"</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#1E88E5] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a Clean Home or Office?</h2>
            <p className="text-xl text-white/80 mb-10">
              Let PureShine Cleaners handle the work so you can enjoy a fresher, more comfortable space. Request your free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-a-quote" className="bg-white text-[#1E88E5] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#26C6DA] hover:text-white transition-all">
                Get a Free Quote
              </Link>
              <Link to="/contact" className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Home;