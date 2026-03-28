import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Heart, Award, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const values = [
    { title: 'Reliability', desc: 'We show up on time, communicate clearly, and deliver service clients can count on.', icon: <ShieldCheck size={32} className="text-[#26C6DA]" /> },
    { title: 'Quality', desc: 'We focus on the details that help spaces feel truly clean, fresh, and well cared for.', icon: <Target size={32} className="text-[#26C6DA]" /> },
    { title: 'Simplicity', desc: 'From booking to service completion, we aim to make the entire process smooth and easy.', icon: <Heart size={32} className="text-[#26C6DA]" /> },
    { title: 'Professionalism', desc: 'We believe clients should feel confident, respected, and well served at every step.', icon: <Award size={32} className="text-[#26C6DA]" /> }
  ];

  return (
    <Layout title="About Us">
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right">
            <h1 className="text-4xl md:text-5xl font-bold text-[#263238] mb-8 leading-tight">About PureShine Cleaners</h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              PureShine Cleaners was created to provide dependable, high-quality cleaning services with a focus on professionalism, convenience, and customer satisfaction. 
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We understand that a clean environment makes daily life easier, whether at home, at work, or in a rental property. Our team is dedicated to giving you back your time so you can focus on what matters most.
            </p>
            <div className="p-8 bg-[#F5F7FA] rounded-2xl border-l-4 border-[#1E88E5]">
              <h3 className="text-xl font-bold text-[#263238] mb-2 uppercase text-sm tracking-wider opacity-60">Our Mission</h3>
              <p className="text-lg font-medium text-gray-700 italic">
                Our mission is to make cleaning services simple, reliable, and accessible for clients who want consistent results without unnecessary hassle.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/4099469/pexels-photo-4099469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Cleaning" 
                className="w-full h-64 object-cover rounded-2xl mt-8 shadow-xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=400" 
                alt="Clean Home" 
                className="w-full h-64 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#1E88E5]/5 rounded-full -z-10"></div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#263238] mb-6">What We Value</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from the way we treat our employees to the quality of service we provide every client.
            </p>
          </AnimatedSection>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all">
              <div className="mb-6 p-4 bg-[#26C6DA]/10 inline-block rounded-2xl text-[#1E88E5]">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-[#263238] mb-4">{val.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#263238] mb-8">Who We Serve</h2>
            <p className="text-lg text-gray-600 mb-12">
              We provide cleaning services for homeowners, renters, apartment residents, small offices, short-term rental hosts, and property managers looking for dependable support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-a-quote" className="bg-[#1E88E5] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#26C6DA] transition-all flex items-center gap-2">
                Request a Quote <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="bg-[#263238] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-700 transition-all flex items-center gap-2">
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
