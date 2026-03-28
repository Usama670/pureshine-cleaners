import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Search } from 'lucide-react';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What areas do you clean?',
      a: 'We clean homes, apartments, offices, and short-term rental properties. Our standard service area covers the entire metro region and surrounding suburbs within a 25-mile radius.'
    },
    {
      q: 'Do you offer one-time and recurring cleaning?',
      a: 'Yes, we offer one-time cleaning as well as recurring service options (weekly, bi-weekly, or monthly) depending on your needs. Recurring clients often receive special discounted rates.'
    },
    {
      q: 'How do I request a quote?',
      a: 'You can use our contact form or quote request page to send your details. We usually respond within 2-4 business hours with a personalized estimate.'
    },
    {
      q: 'Do you bring cleaning supplies?',
      a: 'Yes, our teams arrive fully equipped with professional-grade cleaning supplies and equipment. However, if you have specific products you prefer we use, just let us know and we’re happy to accommodate.'
    },
    {
      q: 'How is pricing determined?',
      a: 'Pricing depends on several factors: the square footage of the property, the type of service (basic, deep, move-out), the current condition of the space, and any special requests you might have.'
    },
    {
      q: 'Is move-out cleaning available?',
      a: 'Yes, move-in and move-out cleaning is one of our core service options. We provide a comprehensive checklist to ensure the property is ready for its next occupant or final inspection.'
    },
    {
      q: 'Can I book office cleaning?',
      a: 'Absolutely! We offer flexible cleaning services for small to mid-sized offices and commercial spaces. These can be scheduled after-hours or during business hours depending on your preference.'
    }
  ];

  return (
    <Layout title="Frequently Asked Questions">
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#263238] mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Everything you need to know about PureShine Cleaners and how we can help keep your space spotless.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search for a question..." 
                className="w-full pl-12 pr-6 py-4 rounded-full border-none shadow-sm focus:ring-2 focus:ring-[#1E88E5] outline-none"
              />
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05} direction="up">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors"
                  >
                    <span className="text-lg font-bold text-[#263238]">{faq.q}</span>
                    <div className={`p-1 rounded-full ${openIndex === idx ? 'bg-[#1E88E5] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <div 
                    className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === idx ? 'max-h-60 pb-8' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed border-t border-gray-50 pt-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#1E88E5] rounded-[2.5rem] overflow-hidden">
          <div className="p-12 md:p-20 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still have questions?</h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Our team is here to help. Contact us directly and we'll get back to you as soon as possible with more information.
            </p>
            <Link to="/contact" className="bg-white text-[#1E88E5] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#26C6DA] hover:text-white transition-all inline-block shadow-lg">
              Get in Touch
            </Link>
          </div>
          <div className="hidden md:block h-full relative">
            <img 
              src="https://images.unsplash.com/photo-1557425955-df376b5903c8?auto=format&fit=crop&q=80&w=600" 
              alt="Support" 
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
