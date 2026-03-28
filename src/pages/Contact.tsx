import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Send, MessageSquare } from 'lucide-react';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Standard',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <Layout title="Thank You">
        <section className="min-h-[60vh] flex items-center justify-center bg-[#F5F7FA]">
          <div className="max-w-md w-full bg-white p-12 rounded-3xl shadow-xl text-center">
            <div className="w-20 h-20 bg-[#26C6DA]/10 text-[#1E88E5] rounded-full flex items-center justify-center mx-auto mb-6">
              <Send size={40} />
            </div>
            <h2 className="text-3xl font-bold text-[#263238] mb-4">Message Sent!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for contacting PureShine Cleaners. We'll get back to you as soon as possible with the next steps.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-[#1E88E5] text-white px-8 py-3 rounded-full font-bold hover:bg-[#26C6DA] transition-all"
            >
              Back to Contact
            </button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout title="Contact Us">
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#263238] mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Have questions or ready to book? Get in touch with PureShine Cleaners today. We’re happy to help with service details, scheduling, and quote requests.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="right">
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="bg-[#1E88E5]/10 p-4 rounded-2xl text-[#1E88E5] h-14 w-14 flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#263238] mb-2">Call Us</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-[#1E88E5]/10 p-4 rounded-2xl text-[#1E88E5] h-14 w-14 flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#263238] mb-2">Email Us</h3>
                    <p className="text-gray-600">hello@pureshinecleaners.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-[#1E88E5]/10 p-4 rounded-2xl text-[#1E88E5] h-14 w-14 flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#263238] mb-2">Business Hours</h3>
                    <p className="text-gray-600 uppercase text-xs font-bold tracking-wider mb-1">Mon–Sat</p>
                    <p className="text-gray-600">8:00 AM – 6:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-[#1E88E5]/10 p-4 rounded-2xl text-[#1E88E5] h-14 w-14 flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#263238] mb-2">Our Location</h3>
                    <p className="text-gray-600">123 Clean Way, Suite 100<br />Modern City, MC 54321</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <form onSubmit={handleSubmit} className="bg-[#F5F7FA] p-8 md:p-10 rounded-[2.5rem] space-y-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare size={24} className="text-[#1E88E5]" />
                  <h2 className="text-2xl font-bold text-[#263238]">Send a Message</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#263238] mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      className="w-full px-5 py-4 rounded-2xl border-none focus:ring-2 focus:ring-[#1E88E5] outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#263238] mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email" 
                      className="w-full px-5 py-4 rounded-2xl border-none focus:ring-2 focus:ring-[#1E88E5] outline-none" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#263238] mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890" 
                      className="w-full px-5 py-4 rounded-2xl border-none focus:ring-2 focus:ring-[#1E88E5] outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#263238] mb-2">Service Needed</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl border-none focus:ring-2 focus:ring-[#1E88E5] outline-none"
                    >
                      <option>Standard Cleaning</option>
                      <option>Deep Cleaning</option>
                      <option>Move-In/Out</option>
                      <option>Office Cleaning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#263238] mb-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    placeholder="Tell us about your cleaning needs..." 
                    className="w-full px-5 py-4 rounded-2xl border-none focus:ring-2 focus:ring-[#1E88E5] outline-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#1E88E5] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#26C6DA] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
