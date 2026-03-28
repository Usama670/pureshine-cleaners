import React, { useState } from 'react';
import { ClipboardList, User, Mail, Phone, Home, Building2, Calendar, FileText, Send } from 'lucide-react';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyType: 'Residential',
    serviceType: 'Standard',
    rooms: '3 Bedrooms',
    preferredDate: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote Request:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <Layout title="Request Received">
        <section className="min-h-[70vh] flex items-center justify-center bg-white px-6">
          <div className="max-w-2xl w-full text-center py-20 px-8 rounded-[3rem] bg-[#F5F7FA] border-2 border-dashed border-[#1E88E5]/20 relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-24 h-24 bg-[#1E88E5] text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <ClipboardList size={48} />
              </div>
              <h2 className="text-4xl font-bold text-[#263238] mb-6">Quote Request Received!</h2>
              <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed">
                Thank you, {formData.fullName.split(' ')[0]}! We've received your request for a {formData.serviceType} cleaning. Our team will review the details and send your personalized quote shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-[#263238] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#1E88E5] transition-all shadow-lg"
              >
                Request Another Quote
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#26C6DA]/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1E88E5]/5 rounded-full -ml-24 -mb-24"></div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout title="Request a Free Quote">
      <section className="bg-[#1E88E5] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Request a Free Cleaning Quote</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Tell us about your property and the type of cleaning service you need. We’ll review your request and provide a quote based on your needs.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2"></div>
      </section>

      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection direction="up">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 -mt-32 relative z-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#263238] flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <User size={20} className="text-[#1E88E5]" /> Contact Details
                  </h3>
                  <div>
                    <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-gray-50 border-none px-5 py-4 rounded-xl focus:ring-2 focus:ring-[#1E88E5] outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-gray-50 border-none px-5 py-4 rounded-xl focus:ring-2 focus:ring-[#1E88E5] outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className="w-full bg-gray-50 border-none px-5 py-4 rounded-xl focus:ring-2 focus:ring-[#1E88E5] outline-none" 
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#263238] flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <Home size={20} className="text-[#1E88E5]" /> Property Details
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Type</label>
                      <select 
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border-none px-5 py-4 rounded-xl focus:ring-2 focus:ring-[#1E88E5] outline-none"
                      >
                        <option>Residential</option>
                        <option>Office</option>
                        <option>Apartment</option>
                        <option>Airbnb</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Service</label>
                      <select 
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border-none px-5 py-4 rounded-xl focus:ring-2 focus:ring-[#1E88E5] outline-none"
                      >
                        <option>Standard</option>
                        <option>Deep Clean</option>
                        <option>Move-In/Out</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Number of Rooms / Offices</label>
                    <input 
                      type="text" 
                      name="rooms"
                      value={formData.rooms}
                      onChange={handleChange}
                      placeholder="e.g. 3 Bedrooms, 2 Baths"
                      className="w-full bg-gray-50 border-none px-5 py-4 rounded-xl focus:ring-2 focus:ring-[#1E88E5] outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="date" 
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border-none pl-12 pr-5 py-4 rounded-xl focus:ring-2 focus:ring-[#1E88E5] outline-none" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold text-[#263238] flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                  <FileText size={20} className="text-[#1E88E5]" /> Additional Notes
                </h3>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about any special requirements or areas that need extra attention..."
                  className="w-full bg-gray-50 border-none px-5 py-4 rounded-xl focus:ring-2 focus:ring-[#1E88E5] outline-none"
                ></textarea>
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-[#1E88E5] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-[#26C6DA] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 mx-auto"
                >
                  Request My Free Quote <Send size={20} />
                </button>
                <p className="mt-6 text-sm text-gray-400 font-medium">
                  Fast, simple, and no-obligation. We usually respond within 4 hours.
                </p>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-[#F5F7FA] text-[#1E88E5] rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-sm">1</div>
            <h3 className="text-xl font-bold text-[#263238]">Submit Details</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Fill out the form with your property size and cleaning needs.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-[#F5F7FA] text-[#1E88E5] rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-sm">2</div>
            <h3 className="text-xl font-bold text-[#263238]">Get Your Quote</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Our team reviews your request and sends a tailored estimate.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-[#F5F7FA] text-[#1E88E5] rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-sm">3</div>
            <h3 className="text-xl font-bold text-[#263238]">Book & Relax</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Approve the quote and schedule a time that works for you.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetAQuote;
